// helpers
const separateNumber = require('../helpers/separateNumberHelper')

const mapperItem = (data, description) => {
  const price = separateNumber(data?.price)
  return {
    author: {
      name: 'Lucia',
      lastname: 'Gabbanelli',
    },
    item: {
      id: data?.id,
      title: data?.title,
      price: {
        currency: data?.currency_id,
        amount: price?.amount,
        decimals: price?.decimals,
      },
      picture: data?.pictures[0].url,
      free_shipping: data?.shipping?.free_shipping,
      sold_quantity: data?.sold_quantity,
      condition: data?.condition,
      description: description?.plain_text,
    },
  }
}

const mapperList = (data) => {
  let price = {}
  const results = data?.results?.slice(0, 4)
  let categories = []
  let items = []

  // to get categories (improve?)
  // TODO: move to helper file
  if (data?.filters && data?.filters[0]) {
    data?.filters[0]?.values[0]?.path_from_root?.forEach((e) => {
      categories.push(e.name)
    })
  }

  results.forEach((e) => {
    price = separateNumber(e.price)
    items.push({
      id: e?.id,
      title: e?.title,
      price: {
        currency: e?.currency_id,
        amount: price?.amount,
        decimals: price?.decimals,
      },
      picture: e?.thumbnail,
      free_shipping: e?.shipping?.free_shipping,
      condition: e?.condition,
      address: e?.address?.state_name,
    })
  })
  
  return {
    author: {
      name: 'Lucia',
      lastname: 'Gabbanelli',
    },
    categories: categories,
    items: items,
  }
}

module.exports = { mapperItem, mapperList }
