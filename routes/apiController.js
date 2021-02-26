class apiController {
  static async index(req, res) {
    try {
		 var user = req.query.username;
res.send("Welcome %s to home page", user);
}

module.exports = apiController;
