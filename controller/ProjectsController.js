
class Projects {
  static async getOne(req, res) {
    return res.status(200).send(req.project);
  }
}

module.exports = Projects;
