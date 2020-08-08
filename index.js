const prices = [10, 9.5, 8.55]
const quantity = [10, 15, 20, 30, 40]

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
}

function findDecliningPercentage(prices) {
  const firstPrice = prices[0]
  const secondPrice = prices[1]
  return 100 - (secondPrice * 100 / firstPrice)
}

function completeMissingPrices(prices, quantity) {
  let decliningPercentage = findDecliningPercentage(prices)
  let pricesLocal = []

  for (let i = 0; i < quantity.length; i++) {
    if (prices[i]) {
      pricesLocal.push(prices[i])
    }
    else {
      const lastPrice = pricesLocal[pricesLocal.length - 1]
      const currentPercentage =  100 - ( i * decliningPercentage)
      const currentMissingPrice =  lastPrice * currentPercentage / 100
      pricesLocal.push(round(currentMissingPrice, 2))
    } 
  }
  return pricesLocal
}

function lemonadePrices(prices, quantity) {
  let completeArrayPrices = completeMissingPrices(prices, quantity)
  const sumPrices = completeArrayPrices.reduce(function(acc, current, i){
    return acc + (current * quantity[i])
  }, 0)

  return sumPrices.toFixed(2) 
}


let result = lemonadePrices(prices, quantity)
console.log('result', result)
