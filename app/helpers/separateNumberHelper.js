const separateNumber = (number) => {
  let result = { amount: number, decimals: 0 }
  if (!Number.isInteger(number)) {
    const aux = number.toString().split('.')
    result = {
      amount: parseInt(aux[0]),
      decimals: parseInt(aux[1]),
    }
  }
  return result
}

module.exports = separateNumber
