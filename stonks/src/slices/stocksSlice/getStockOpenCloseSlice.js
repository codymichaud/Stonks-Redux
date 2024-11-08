import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getStockOpenCloseSlice = createSlice({
  name: 'stockOpenClose',
  initialState: [],
  reducers: {
    getStockOpenClose: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v1/open-close/${action.payload.ticker}/${action.payload.date}?${api_key}`)
        .then(res => {
          console.log('some stock deets', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getStockOpenClose } = getStockOpenCloseSlice.actions
export default getStockOpenCloseSlice.reducer
