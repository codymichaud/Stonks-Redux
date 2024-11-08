import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import API from '../../utils/API'
import PropTypes from 'prop-types'

const HomeChart = () => {
  const [chartData, setChartData] = useState([])

  useEffect((stocksTicker, multiplier, timespan, from, to) => {
    loadStocks(stocksTicker, multiplier, timespan, from, to)
  }, [])

  function loadStocks (stocksTicker, multiplier, timespan, from, to) {
    API.getStocks(stocksTicker, multiplier, timespan, from, to)
      .then(res => {
        setChartData(res.data)
      })
      .catch(err => {
        console.log(err)
      }
      )
  }

  return (
    <div>
      <Doughnut />
    </div>
  )
}

HomeChart.propTypes = {
  loadStocks: PropTypes.func.isRequired
}

export default HomeChart
