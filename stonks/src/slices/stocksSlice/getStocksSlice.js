import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getStocksSlice = createSlice({
  name: 'stockList',
  initialState: [],
  reducers: {
    getStocks: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v3/reference/tickers?sort=name&order=asc&limit=50&apiKey=${api_key}`)
        .then(res => {
          console.log('some stocks', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getStocks } = getStocksSlice.actions
export default getStocksSlice.reducer
