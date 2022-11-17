// modules
const express = require('express')
const router = express.Router()
const fs = require('fs')
// helpers
const removeExtensions = require('../helpers/removeExtensionsHelper')

const pathRouter = `${__dirname}`

// to add new routes dynamically
fs.readdirSync(pathRouter).filter((e) => {
  const file = removeExtensions(e)
  // ignore index file
  if (file !== 'index') {
    router.use(`/${file}`, require(`./${file}`))
  }
})

// case of no matching route return error
router.get('*', (req, res) => {
  res.status(404)
  res.send({ error: 'not found' })
})

module.exports = router
