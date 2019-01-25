const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLastSentence,
  addNewSentence,
  loadStory
}

function getLastSentence (db = connection) {
  return db('story')
    .select()
}

function addNewSentence (sentence, db = connection) {
  return db('story')
    .insert([{sentence: sentence}])
}

function loadStory (db = connection) {
  return db('story')
    .select('sentence')
}
