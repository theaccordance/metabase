import {Command, flags} from '@oclif/command';
import {createConnection, getMongoRepository} from "typeorm";
import axios from "axios";
import {TickerSymbol} from "../../typeorm/entity/TickerSymbol";
import dotenv from "dotenv";
dotenv.config();

export default class Ticker extends Command {
  static description = 'Import Stock Ticker Data from Styvio.com';


  async run() {
    this.log("Connecting to Database...")
    const connection = await createConnection({
      "type": "mongodb",
      "url": process.env.STYVIO_MONGO_URL,
      "database": process.env.STYVIO_MONGO_DATABASE,
      "synchronize": true,
      "logging": false,
      "entities": [
        "src/typeorm/entity/TickerSymbol.ts"
      ],
      "migrations": [
        "src/typeorm/migration/**/*.ts"
      ],
      "subscribers": [
        "src/typeorm/subscriber/**/*.ts"
      ],
      "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
      }
    });
    const tickerRepo = getMongoRepository(TickerSymbol);

    const tickerList: string[] = await axios.get('https://www.styvio.com/completeTickerList/').then((response) => {
      return response.data.tickerList || [];
    });

    this.log(`Fetching list of available symbols... ${tickerList.length} found.`);

    for (const ticker of tickerList) {
      this.log(`Fetching Ticker Symbol ${ticker}`);
      const tickerData = await axios.get(`https://www.styvio.com/api/${ticker}`).then((response) => {
        return response.data;
      });

      const tickerRecord = tickerRepo.create(tickerData);

      if (tickerRecord?.ticker) {
        const existingRecord = await tickerRepo.findOne({ticker});

        if (!existingRecord) {
          await tickerRepo.save(tickerRecord)
            .catch((err) => {
              throw new Error(err);
            });
        }

        await tickerRepo.updateOne({ticker}, { $set: tickerRecord }, {upsert: true})
          .catch((err) => {
            throw new Error(err);
          });

        this.log(`Record for Ticker Symbol ${ticker} ${existingRecord ? "updated" : "created"}`);
      } else {
        this.log(`Error saving record for ${ticker}, skipping import`)
      }
    }
  }
}
