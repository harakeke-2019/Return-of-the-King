exports.seed = function (knex, Promise) {
  return knex('story').del()
    .then(function () {
      return knex('story').insert([
        {id: 1, sentence: 'Once apon a time '}
      ])
    })
}
