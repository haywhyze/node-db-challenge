const db = require('../data/model');

class Projects {
  static async create(req, res, next) {
    const newProject = {
      name: req.body.name,
      description: req.body.description,
    };
    try {
      const newProjectData = await db.insertProject(newProject);
      return res.status(201).json(newProjectData);
    } catch (error) {
      return next(error);
    }
  }

  static async getOne(req, res) {
    return res.status(200).send(req.project);
  }
}

module.exports = Projects;
