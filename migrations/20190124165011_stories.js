exports.up = (knex, Promise) => {
  return knex.schema.createTable('stories', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('sentence')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('stories')
}
