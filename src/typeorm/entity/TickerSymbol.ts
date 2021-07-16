import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity({name: "ticker_symbols"})
export class TickerSymbol {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  ticker: string;

  @Column()
  shortName: string;

  @Column()
  logoURL: string;

  @Column()
  invScore: number;

  @Column()
  invWords: string;

  @Column()
  invRate: number;

  @Column()
  tradeScore: string;

  @Column()
  tradeWords: string;

  @Column()
  tradeRate: number;

  @Column()
  marketCap: number;

  @Column()
  newsArticle1: string;

  @Column()
  newsArticle2: string;

  @Column()
  newsArticle3: string;

  @Column()
  newsArticle4: string;

  @Column()
  newsArticle5: string;

  @Column()
  newsDate1: string;

  @Column()
  newsDate2: string;

  @Column()
  newsDate3: string;

  @Column()
  newsDate4: string;

  @Column()
  newsDate5: string;

  @Column()
  newsLink1: string;

  @Column()
  newsLink2: string;

  @Column()
  newsLink3: string;

  @Column()
  newsLink4: string;

  @Column()
  newsLink5: string;

  @Column()
  newsSource1: string;

  @Column()
  newsSource2: string;

  @Column()
  newsSource3: string;

  @Column()
  newsSource4: string;

  @Column()
  newsSource5: string;

  @Column()
  holder0: string;

  @Column()
  holder1: string;

  @Column()
  holder2: string;

  @Column()
  holder3: string;

  @Column()
  holder4: string;

  @Column()
  holder5: string;

  @Column()
  holder6: string;

  @Column()
  holder7: string;

  @Column()
  holder8: string;

  @Column()
  holder9: string;

  @Column()
  sharesAmount0: string;

  @Column()
  sharesAmount1: string;

  @Column()
  sharesAmount2: string;

  @Column()
  sharesAmount3: string;

  @Column()
  sharesAmount4: string;

  @Column()
  sharesAmount5: string;

  @Column()
  sharesAmount6: string;

  @Column()
  sharesAmount7: string;

  @Column()
  sharesAmount8: string;

  @Column()
  sharesAmount9: string;

  @Column()
  datesGrow1: string;

  @Column()
  datesGrow2: string;

  @Column()
  datesGrow3: string;

  @Column()
  datesGrow4: string;

  @Column()
  assetGrow1: number;

  @Column()
  assetGrow2: number;

  @Column()
  assetGrow3: number;

  @Column()
  assetGrow4: number;

  @Column()
  liabGrow1: number;

  @Column()
  liabGrow2: number;

  @Column()
  liabGrow3: number;

  @Column()
  liabGrow4: number;

  @Column()
  companyDescription: string;

  @Column()
  holdingsPie: number[];

  @Column()
  insiderHoldings: string;

  @Column()
  institutionHoldings: string;

  @Column()
  generalPublicHoldings: string;

  @Column()
  numberOfInstitutionsHolding: number;

  @Column()
  revenueGrowth: number[];

  @Column()
  profitGrowth: number[];

  @Column()
  revenueGrowthText: string;

  @Column()
  profitGrowthText: string;

  @Column()
  locationLatty: string;

  @Column()
  locationLonny: string;

  @Column()
  companyLocation: string;

  @Column()
  companyAdress: string;

  @Column()
  currentPrice: string;

  @Column()
  percentText: string;

  @Column()
  percentTextYear: string;

  @Column()
  dailyPrices: number[];

  @Column()
  dailyPrices5MinIntervals: number[];

  @Column()
  weeklyPrices: number[];

  @Column()
  weeklyPrices30MinIntervals: number[];

  @Column()
  oneMonthPrices: number[];

  @Column()
  threeMonthPrices: number[];

  @Column()
  sixMonthPrices: number[];

  @Column()
  yearlyPrices: number[];

  @Column()
  "5yearPrices": number[];

  @Column()
  allTimePrices: number[];
}
