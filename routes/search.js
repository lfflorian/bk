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

            if (data.results.length > 0) {
                res.status(201).json(data)
            } else
            {
                res.status(404).json(data)
            }
        } catch (err) {
            console.log(err)
            res.status(500).json(data)
        }
    })
}

module.exports = searchApi