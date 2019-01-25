exports.seed = function (knex, Promise) {
  return knex('stories').del()
    .then(function () {
      return knex('stories').insert([
        {id: 1, name: 'Start Story', sentence: 'Once apon a time '}
      ])
    })
}
