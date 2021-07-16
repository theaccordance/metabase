import {Command, flags} from '@oclif/command';
import axios from 'axios';
import {createConnection} from "typeorm";
import {TickerSymbol} from "../typeorm/entity/TickerSymbol";

export default class Styvio extends Command {
  static description = 'Import Stock Data from Styvio.com'

  static examples = [
    `$ mbimport styvio
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'file'}]

  async run() {
    this.log(`init TypeORM connection`);
    const connection = await createConnection();
    const tickerRepo = connection.getRepository(TickerSymbol);
    this.log(`connection initialized.`);
    this.log(`Starting import of data from styvio`);
    const tickerList: string[] = await axios.get('https://www.styvio.com/completeTickerList/').then((response) => {
      return response.data.tickerList || [];
    });

    this.log(`${tickerList.length} ticker symbols found.`);

    for (const ticker of tickerList) {
      this.log(`Fetching symbol data for ${ticker}`);
      const tickerData = await axios.get(`https://www.styvio.com/api/${ticker}`).then((response) => {
        return response.data;
      });

      const tickerRecord = tickerRepo.create(tickerData);

      await tickerRepo.save(tickerRecord).catch((err) => {
        console.log("Error: ", err);
      });

      this.log(`Record ${ticker} saved`);
    }
  }
}
