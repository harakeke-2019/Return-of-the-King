const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStoryNames,
  updateStory,
  addNewSentence,
  displaySentence,
  getStory
}

function getLastSentence (db = connection) {
  return db('story')
    .select()
}

function addNewSentence (sentence, db = connection) {
  return db('story')
    .insert([{sentence: sentence}])
}

function addNewSentence (sentence, db = connection) {
  return db('stories')
    .select()
    .insert({'sentence': sentence})
}

function displaySentence(db = connection) {
  return db('stories')
    .select()

}

function getStory(db =connection){
  return db('stories')
    .select('sentence')
}