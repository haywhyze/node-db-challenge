const db = require('./dbConfig');

async function getProjectById(id) {
  const project = await db('projects')
    .where('id', id)
    .first();
  if (project) {
    project.completed = !!project.completed;
    if (project) project.actions = await db('actions').where('project_id', id);
    if (project.actions) {
      project.actions.forEach((action) => {
        // eslint-disable-next-line no-param-reassign
        action.completed = !!action.completed;
      });
    }
  }
  return project;
}

module.exports = {
  getProjectById,
};
