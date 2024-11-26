const AuthService = require("../../application/services/AuthService");

class AuthController {
  static async register(req, res) {
    const { name, username, password, userType } = req.body;
    console.log('🚀 ~ AuthController ~ register ~ username:', username)
    try {
      const token = await AuthService.register(
        name,
        username,
        password,
        userType
      );
      console.log('🚀 ~ AuthController ~ register ~ token:', token)
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }

  static async login(req, res) {
    const { username, password } = req.body;
    console.log('🚀 ~ AuthController ~ login ~ username:', username)
    try {
      const token = await AuthService.login(username, password);
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
}

module.exports = AuthController;
