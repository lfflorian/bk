const express = require('express')

const SearchService = require('../services/search.service')

const service = new SearchService();

function searchApi(app) {
    const router = express.Router()
    app.use('/api/search', router)

    router.get('/', async (req, res) => {
        try {
            var text = req.query.text
            var proficient = req.query.proficient
            var data = await service.searchPeopleByProficiency(text, proficient)
            res.status(201).json(data)
        } catch (err) {
            console.log(err)
        }
    })
}

module.exports = searchApi