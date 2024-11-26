const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../domain/models/User'); // Importar el modelo User
const UserRepositoryImpl = require("../../adapters/repositories/UserRepositoryImpl"); // Importar la implementación

class AuthService {
  static async register(name, username, password, userType) {
    const userRepository = new UserRepositoryImpl(); // Crear instancia de la implementación
    let user = await userRepository.findByUsername(username);
    if (user) {
      throw new Error("User already exists");
    }
    user = new User({ name, username, password, userType });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await userRepository.save(user);
    const payload = { user: { id: user.id } };
    return jwt.sign(payload, "secret", { expiresIn: 360000 });
  }

  static async login(username, password) {
    const userRepository = new UserRepositoryImpl(); // Crear instancia de la implementación
    let user = await userRepository.findByUsername(username);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const payload = { user: { id: user.id } };
    return jwt.sign(payload, "secret", { expiresIn: 360000 });
  }
}

module.exports = AuthService;
