import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getStockPrevCloseSlice = createSlice({
  name: 'getPrevClose',
  initialState: [],
  reducers: {
    getStockPrevClose: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v2/aggs/ticker/${action.payload.ticker}/prev?${api_key}`)
        .then(res => {
          console.log('some stock deets', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getStockPrevClose } = getStockPrevCloseSlice.actions
export default getStockPrevCloseSlice.reducer
