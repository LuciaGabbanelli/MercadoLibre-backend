// módulos
const express = require('express')
const cors = require('cors')
// configuración
const config = require('./config/config.js')

const app = express()

app.use(cors())

// rutas
app.use('/api', require('./app/routes'))

app.listen(config.PORT, config.HOST, () => {
  console.log('NODE_ENV', config.NODE_ENV)
  console.log('Servidor escuchando en el puerto', config.PORT)
})
