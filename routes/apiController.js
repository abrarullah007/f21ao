class apiController {
  static async index(req, res) {
    try {
      let payload = "Welcome to home page";
      res.send(payload);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }
}

module.exports = apiController;
