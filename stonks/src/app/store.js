import { configureStore } from '@reduxjs/toolkit'
import addStockReducer from './slices/stocksSlice/getStocksSlice'
import getStockDetailReducer from './slices/stocksSlice/getStockDetailSlice'
import getMarketStatusReducer from './slices/stocksSlice/getMarketStatusSlice'
import getStockTypesReducer from './slices/stocksSlice/getStockTypesSlice'
import getStockOpenCloseReducer from '../slices/stocksSlices/getStockOpenCloseSlice'
import getStockPrevCloseReducer from '../slices/stocksSlice/getStockPrevCloseSlice'
import getStockTradeReducer from '../slices/stocksSlice/getStockTradeSlice'

export const store = configureStore({
  reducer: {
    addStock: addStockReducer,
    getStockDetail: getStockDetailReducer,
    getMarketStatus: getMarketStatusReducer,
    getStockTypes: getStockTypesReducer,
    getStockOpenClose: getStockOpenCloseReducer,
    getStockPrevClose: getStockPrevCloseReducer,
    getStockTrades: getStockTradeReducer
  }
})
