class apiController {
  static async index(req, res) {
    try {
		 var user = req.query.username;
 var str = "Hello "+ user +"! Welcome to home page";
			res.send(str);
  } catch (exception) {
      res.status(500).send(exception);
    }
  }
}

module.exports = apiController;
