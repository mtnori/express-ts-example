exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', table => {
    table.increments();
    table.timestamps();
    table.string('name', 255).notNull();
  });
};

exports.down = function(knex, Promise) {};
