const express = require('express')

const UserService = require('../services/user.service')

const service = new UserService();

function userApi(app) {
    const router = express.Router()
    app.use('/api/user', router)

    router.get('/', async (req, res) => {
        try {
            var userId = req.query.id
            var data = await service.getUser(userId)

            if (data.person) {
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

module.exports = userApi