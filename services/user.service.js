const request = require('request')
const { config } = require('../config/index')

class UserService {
    async getUser(user) {
        return await new Promise(function(resolve, reject)  {
            request(`${config.user_torre_api}${user}`, { json: true },(err, res, body) => {
                if (err) { reject(err) }
                resolve(body)
            })
        })
    }
}

module.exports = UserService