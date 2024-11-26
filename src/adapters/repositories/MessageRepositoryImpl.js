const Message = require("../../domain/models/Message");
const MessageRepository = require("../../domain/repositories/MessageRepository");

class MessageRepositoryImpl extends MessageRepository {
  async findAll() {
    return await Message.find().populate("user", ["name", "userType"]);
  }

  async save(message) {
    return await message.save();
  }
}

module.exports = MessageRepositoryImpl;
