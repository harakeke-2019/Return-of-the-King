exports.up = (knex, Promise) => {
  return knex.schema.createTable('story', (table) => {
    table.increments('id').primary()
    table.string('sentence')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('story')
}
