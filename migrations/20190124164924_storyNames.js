exports.up = (knex, Promise) => {
  return knex.schema.createTable('storyNames', (table) => {
    table.increments('id').primary()
    table.string('storyName')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('storyNames')
}
