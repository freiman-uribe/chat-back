const MessageRepositoryImpl = require("../../adapters/repositories/MessageRepositoryImpl"); // Importar la implementación
const Message = require("../../domain/models/Message");

class ChatService {
  static async getMessages() {
    const messageRepository = new MessageRepositoryImpl(); // Crear instancia de la implementación
    return await messageRepository.findAll();
  }

  static async postMessage(userId, text) {
    const messageRepository = new MessageRepositoryImpl(); // Crear instancia de la implementación
    let message = new Message({ user: userId, text });
    await messageRepository.save(message);
    return await message.populate("user", ["name", "userType"]);
  }
}

module.exports = ChatService;
