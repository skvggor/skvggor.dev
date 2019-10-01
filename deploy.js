'use strict'

const scrape = require('website-scraper')
const options = {
  urls: ['http://localhost:8080/'],
  directory: './public/site/'
}

;(async function() {
  await scrape(options)
})()

