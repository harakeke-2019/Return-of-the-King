const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStoryNames,
  updateStory,
  addNewSentence,
  displayStory
}

function getStoryNames (db = connection) {
  return db('storyNames')
    .select()
}

function updateStory (id, db = connection) {
  return db('storyNames')
    .join('stories', 'storyNames.storyName', 'stories.name')
    .where('storyNames.id', id)
    .select()
}

function addNewSentence (sentence, db = connection) {
  return db('stories')
    .insert({'sentence': sentence})
}

function displayStory(story, db = connection) {
  return db('stories')
    .select()
    .where
}
