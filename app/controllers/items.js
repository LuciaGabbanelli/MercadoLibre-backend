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
    // get data API MILI
    const response = await responseItem(req.params.id)
    const description = await responseItemDescription(req.params.id)

    // mapping the object to the requested format before responding
    res.status(200).json(mapperItem(response, description))
  } catch (err) {
    handleError(res, err)
  }
}

const getItems = async (req, res) => {
  try {
    // get data API MILI
    const response = await responseList(req.query.q)

    // mapping the object to the requested format before responding
    res.status(200).json(mapperList(response))
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = { getItems, getItem }
