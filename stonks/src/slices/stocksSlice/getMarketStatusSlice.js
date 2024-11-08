import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getMarketStatusSlice = createSlice({
  name: 'marketStatus',
  initialState: [],
  reducers: {
    getMarketStatus: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v1/marketstatus/now?${api_key}`)
        .then(res => {
          console.log('some stock deets', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getMarketStatus } = getMarketStatusSlice.actions
export default getMarketStatusSlice.reducer
