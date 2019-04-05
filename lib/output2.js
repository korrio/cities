'use strict'

const chalk = require('chalk')

module.exports = (city, country, region, media) => {
  const output2 = [`
${chalk.bold.yellow('⇢ City:')} ${chalk.bold(city)}
${chalk.bold.yellow('⇢ Country:')} ${chalk.bold(country)}
${chalk.bold.yellow('⇢ Region:')} ${chalk.bold(region)}
${chalk.bold.yellow('⇢ Media:')} ${chalk.bold("https://nomadlist.com" + media)}
  `].join('\n')

  return output2
}
