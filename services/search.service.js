const request = require('request')
const { config } = require('../config/index')

class SearchService {
    async searchPeopleByProficiency(text, proficiency) {
        return await new Promise(function(resolve, reject)  {
            request.post({
                headers: { 'content-type' : 'application/json'},
                uri: `${config.search_torre_api}`,
                body: `{ "and":[{"skill/role":{"text": "${text}","proficiency": "${proficiency}"}}]}`
            }, (err, res, body) => {
                if (err) { reject(err) }
                resolve(JSON.parse(body))
            })
        })
    }
}

module.exports = SearchService