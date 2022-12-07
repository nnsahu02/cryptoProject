const axios = require('axios')

const cryptoModel = require('../model/cryptoModel')

exports.getCrypto = async (req, res) => {
    try {

        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer 83803234-3632-4e24-a407-5917c77b2a28",
            }
        }
        let result = await axios(options)

        let coinData = result.data

        let dataArr = coinData.data

        const deletedbData = await cryptoModel.deleteMany()

        const createCrypto = await cryptoModel.create(dataArr)

        let sortCrypto = (dataArr).sort((a, b) => a.changePercent24Hr - b.changePercent24Hr)

        console.log(sortCrypto.length)

        res.status(200).send({ status: true, data: sortCrypto })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}