const ChatService = require('../../application/services/ChatService');

class ChatController {
    static async getMessages(req, res) {
        try {
            const messages = await ChatService.getMessages();
            res.json(messages);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }

    static async postMessage(req, res, io) {
        const { text } = req.body;
        try {
            const message = await ChatService.postMessage(req.user.id, text);
            io.emit("message", message);
            res.json(message);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
}

module.exports = ChatController;