const { CLIEngine } = require('eslint')

const cli = new CLIEngine()
const report = cli.executeOnText('')
const formatter = cli.getFormatter()
console.log(formatter(report.results))
