const express = require('express');
const auth = require('../middleware/auth');
const ChatController = require("../../adapters/controllers/ChatController");
const router = express.Router();

module.exports = (io) => {
    router.get("/messages", auth, ChatController.getMessages);
    router.post("/messages", auth, (req, res) => ChatController.postMessage(req, res, io));
    return router;
};