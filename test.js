const { CLIEngine } = require('eslint')

it('can run via ESLint Node.js API', () => {
  const cli = new CLIEngine()
  const report = cli.executeOnText('')
  const formatter = cli.getFormatter()
  console.log(formatter(report.results))
})
