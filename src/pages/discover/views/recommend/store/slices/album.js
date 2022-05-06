import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const albumData = createAsyncThunk(
  'recommend/getAlbum',
  async (limit = 8) => {
    const res = await request({
      url: '/top/album',
      params: {
        limit,
      },
    })
    return res // 此处的返回结果会在 .fulfilled中作为payload的值
  }
)

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    newAlbums: [],
  },
  reducers: {
    increment(state) {
      return { ...state, count: state.count + 1 }
    },
    decrement(state) {
      return { ...state, count: state.count - 1 }
    },
  },
  extraReducers: {
    [albumData.fulfilled](state, { payload }) {
      state.newAlbums = payload.weekData
    },
    [albumData.rejected](state, err) {
      console.log(err)
    },
    [albumData.pending](state) {
      console.log('进行中')
    },
  },
})

// export const { increment, decrement } = recommendSlice.actions
