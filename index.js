const express = require('express')
const cors = require('cors')
const app = express()
const { config } = require('./config/index')

const userApi = require('./routes/user')
const searchApi = require('./routes/search')

app.use(express.json())
app.use(cors());

userApi(app)
searchApi(app)

app.listen(config.port, function () {
    console.log(`Listening on http://localhost:${config.port}`)
})