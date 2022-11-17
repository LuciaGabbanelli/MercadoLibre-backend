// endpoints API
const {
  responseItem,
  responseItemDescription,
  responseList,
} = require('../endpoints/items')
// helpers
const handleError = require('../helpers/httpErrorHelper')
// mappers
const { mapperItem, mapperList } = require('../mappers/items')

const getItem = async (req, res) => {
  try {
    // obtener datos API externa
    const response = await responseItem(req.params.id)
    const description = await responseItemDescription(req.params.id)

    // mapeo del objeto a formato pedido antes de responder
    res.status(200).json(mapperItem(response, description))
  } catch (err) {
    //handleError(res, err)
  }
}

const getItems = async (req, res) => {
  try {
    // obtener datos API externa
    const response = await responseList(req.query.q)

    // mapeo del objeto a formato pedido antes de responder
    res.status(200).json(mapperList(response))
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = { getItems, getItem }
