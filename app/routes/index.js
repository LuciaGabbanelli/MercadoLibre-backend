// módulos
const express = require('express')
const router = express.Router()
const fs = require('fs')
// helpers
const removeExtensions = require('../helpers/removeExtensionsHelper')

const pathRouter = `${__dirname}`

// para agregar nuevas rutas dinámicamente
fs.readdirSync(pathRouter).filter((e) => {
  const file = removeExtensions(e)
  // ignorar archivo index
  if (file !== 'index') {
    router.use(`/${file}`, require(`./${file}`))
  }
})

// caso de ninguna ruta coincidente devolver error
router.get('*', (req, res) => {
  res.status(404)
  res.send({ error: 'not found' })
})

module.exports = router
