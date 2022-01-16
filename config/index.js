require ('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    user_torre_api: process.env.USER_TORRE_API,
    search_torre_api: process.env.SEARCH_TORRE_API,
}

module.exports = { config }