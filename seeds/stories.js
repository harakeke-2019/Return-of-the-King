exports.seed = function (knex, Promise) {
  return knex('stories').del()
    .then(function () {
      return knex('stories').insert([
        {id: 1, name: 'The Best Fairytale Ever', sentence: 'Once apon a time '}
      ])
    })
}
