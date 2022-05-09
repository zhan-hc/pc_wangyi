import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const singerData = createAsyncThunk(
  'recommend/getsinger',
  async (params = { limit: 5, type: 1, area: 7 }) => {
    const res = await request({
      url: '/artist/list',
      params,
    })
    return res // 此处的返回结果会在 .fulfilled中作为payload的值
  }
)

export const singerSlice = createSlice({
  name: 'singer',
  initialState: {
    newSingers: [],
  },
  reducers: {},
  extraReducers: {
    [singerData.fulfilled](state, { payload }) {
      state.newSingers = payload.artists
    },
    [singerData.rejected](state, err) {
      console.log(err)
    },
    [singerData.pending](state) {
      console.log('进行中')
    },
  },
})

// export const { increment, decrement } = recommendSlice.actions
