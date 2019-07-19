const express = require('express');
const middlewares = require('../middlewares');
const ProjectsController = require('../controller/ProjectsController');

const projects = express.Router();

projects.get('/:id', middlewares.validateId, ProjectsController.getOne);
projects.post('/', middlewares.validateProject, ProjectsController.create);

module.exports = projects;
