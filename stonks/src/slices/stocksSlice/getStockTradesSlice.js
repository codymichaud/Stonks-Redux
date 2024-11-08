import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getStockTradesSlice = createSlice({
  name: 'stockTrades',
  initialState: [],
  reducers: {
    getStockTrades: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v3/trades/${action.payload.ticker}?${api_key}`)
        .then(res => {
          console.log('some stock deets', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getStockTrades } = getStockTradesSlice.actions
export default getStockTradesSlice.reducer
