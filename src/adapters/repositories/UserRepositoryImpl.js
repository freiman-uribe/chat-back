const User = require("../../domain/models/User");
const UserRepository = require("../../domain/repositories/UserRepository");

class UserRepositoryImpl extends UserRepository {
  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async save(user) {
    return await user.save();
  }
}

module.exports = UserRepositoryImpl;
