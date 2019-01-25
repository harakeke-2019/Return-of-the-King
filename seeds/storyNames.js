exports.seed = function (knex, Promise) {
  return knex('storyNames').del()
    .then(function () {
      return knex('storyNames').insert([
        {id: 1, storyName: 'Start Story'}
      ])
    })
}
