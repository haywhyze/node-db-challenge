/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (projects) => {
      projects.increments();
      projects.string('name', 128)
        .notNullable();
      projects.text('description')
        .notNullable();
      projects.boolean('completed')
        .defaultTo(false);
    })
    .createTable('actions', (actions) => {
      actions.increments();
      actions.string('description', 128)
        .notNullable();
      actions.text('notes')
        .notNullable();
      actions.boolean('completed')
        .defaultTo(false);
      actions.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions');
};
