const express = require('express')
const mongoose = require('mongoose')
const route = require('./router/router')

const app = express()

app.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://nnsahu2022:Sahurk012@mycluster.ne522qz.mongodb.net/Blockchain-ProjectData", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is Connected."))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, () => {
    console.log("Express is running in the PORT 3000.")
})

