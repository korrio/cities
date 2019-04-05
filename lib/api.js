'use strict'

const got = require('got')
const ora = require('ora')

const spinner = ora()
const apiUrl = 'https://api.aq1.co/cities.json'

module.exports = () => {
  spinner.start()

  return got(apiUrl)
    .then(res => {
      spinner.stop()

      const data = JSON.parse(res.body).result

      return data
    })
}
