const express = require('express')
const router = express.Router()

const Chats = require('../model/modeChat')

router.get('/', async (req, res)=> {
    res.send('Hello World')
});


module.exports = router;