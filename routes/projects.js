const express = require('express');
const middlewares = require('../middlewares');
const ProjectsController = require('../controller/ProjectsController');

const projects = express.Router();

projects.get('/:id', middlewares.validateId, ProjectsController.getOne);

module.exports = projects;
