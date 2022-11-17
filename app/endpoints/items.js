// módulos
const axios = require('axios')
// configuración
const config = require('../../config/config')

// llamadas a la API 
const responseItem = async (id) => {
  try {
    const response = await axios({
      url: `${config.API_URL}/items/${id}`,
      method: 'get',
    })
    return response.data
  } catch (error) {
    throw error
  }
}

const responseItemDescription = async (id) => {
  try {
    const response = await axios({
      url: `${config.API_URL}/items/${id}/description`,
      method: 'get',
    })
    return response.data
  } catch (error) {
    throw error
  }
}

const responseList = async (q) => {
  try {
    const response = await axios({
      url: `${config.API_URL}/sites/MLA/search?q=${q}`,
      method: 'get',
    })
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = { responseItem, responseItemDescription, responseList }
