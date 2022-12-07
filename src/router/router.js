const express = require('express')
const router = express.Router()

const cryptoController = require('../controller/cryptoController')

router.get("/cryptos", cryptoController.getCrypto)

module.exports = router
