const mongoose = require('mongoose')

const cryptoSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            unique: true
        },
        name: {
            type: String,
            unique: true
        },
        marketCapUsd: {
            type: String,
            unique: true
        },
        priceUsd: {
            type: String,
            unique: true
        }
    }
)

module.exports = mongoose.model('crypto', cryptoSchema)