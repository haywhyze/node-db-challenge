const db = require('../data/model');

async function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || id % 1 !== 0 || id < 0) {
    return res.status(400).send({
      message: 'invalid id provided',
    });
  }
  try {
    const data = await db.getProjectById(id);
    if (!data) {
      return res.status(404).send({
        message: 'id provided does not exist',
      });
    }
    req.project = data;
  } catch (error) {
    return next(error);
  }
  return next();
}

function validateProject(req, res, next) {
  if (!Object.keys(req.body).length) {
    return res.status(400).send({
      message: 'missing project data',
    });
  }
  if (!req.body.name) {
    return res.status(400).send({
      message: 'missing required name field',
    });
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: 'missing required description field',
    });
  }
  return next();
}

module.exports = {
  validateId,
  validateProject,
};
