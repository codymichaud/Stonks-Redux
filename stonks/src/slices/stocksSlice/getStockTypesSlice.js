import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api_key = '9DD2ovL29FnmmLZfepebZJ9WrGLEo8Jr'

const getStockTypesSlice = createSlice({
  name: 'stockTypes',
  initialState: [],
  reducers: {
    getStockTypes: async (state, action) => {
      await axios
        .get(`https://api.polygon.io/v3/reference/tickers/types?asset_class=${action.payload.asset_class}&apiKey=${api_key}`)
        .then(res => {
          console.log('some stocks', res.data)
          state.push(res.data)
        })
    }
  }
}
)

export const { getStockTypes } = getStockTypesSlice.actions
export default getStockTypesSlice.reducer
