import {Command, flags} from '@oclif/command'

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
    this.log(`Starting import of data from styvio`);
    // connect to database
    // fetch symbols
    // fetch data for each symbol
    // if symbol exists in collection => update doc
    // if new symbol => create doc
  }
}
