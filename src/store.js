import { configureStore } from '@reduxjs/toolkit'
import RegionReducer from "./reducer/regionSlice"

export const store = configureStore({
  reducer: {
    region: RegionReducer,
  },
})