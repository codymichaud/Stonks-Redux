import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getStockDetailSlice = createSlice({
  name: 'stockDetail',
  initialState: [],
  reducers: {
    getStockDetail: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v3/reference/tickers/${action.payload.ticker}?${api_key}`)
        .then(res => {
          console.log('some stock deets', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getStockDetail } = getStockDetailSlice.actions
export default getStockDetailSlice.reducer
