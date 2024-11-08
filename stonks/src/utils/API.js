import axios from 'axios'

export default {
  getStocks: function (stocksTicker, multiplier, timespan, from, to) {
    return axios.get(`https://api.polygon.io/v2/aggs/ticker/
    ${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}`)
      .then(res => {
        console.log('some stocks', res.data)
        // setChartData(res.data)
      })
  }
}
