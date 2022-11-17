// módulos
const express = require('express')
const router = express.Router()
// controladores
const { getItems, getItem } = require('../controllers/items')

router.get('/', getItems)

router.get('/:id', getItem)

module.exports = router
