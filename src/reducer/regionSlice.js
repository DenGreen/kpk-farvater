import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "RU-SAR",
}

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    regionCode: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { regionCode } = regionSlice.actions

export default regionSlice.reducer