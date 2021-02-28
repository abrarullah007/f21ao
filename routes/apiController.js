class apiController {
  static async index(req, res) {
    try {
      var str = "Hello world!";
      res.send(str);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }

  static async users(req, res) {
    try {
      var arr = [
        { "user id": 1, firstname: "Joe", lastname: "Bloggs" },
        { "user id": 2, firstname: "Simon", lastname: "Peters" },
        { "user id": 3, firstname: "Lakshmi", lastname: "Das" },
      ];
      res.send(arr);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }

  static async userObject(req, res) {
    try {
      var obj = { id: 1, firstname: "Joe", lastname: "Bloggs" };
      res.send(obj);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }

  static async welcomeUser(req, res) {
    try {
      var user = req.query.username;
      var str = "Welcome " + user + "!";
      res.send(str);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }

  static async save(req, res) {
    try {
      var user = req.body.username;
      var str = user + " saved!";
      res.send(str);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }
}

module.exports = apiController;
