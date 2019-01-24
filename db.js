const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getStoryNames
}

function getStoryNames (db = connection) {
  return db('storyNames')
    .select('storyNames.storyname')
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}
