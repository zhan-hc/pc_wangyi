import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const anchorData = createAsyncThunk(
  'recommend/getanchor',
  async (limit = 5) => {
    const res = await request({
      url: '/dj/toplist/hours',
      params: {
        limit,
      },
    })
    return res // 此处的返回结果会在 .fulfilled中作为payload的值
  }
)

export const anchorSlice = createSlice({
  name: 'anchor',
  initialState: {
    hotAnchors: [],
  },
  reducers: {},
  extraReducers: {
    [anchorData.fulfilled](state, { payload }) {
      state.hotAnchors = payload.data.list
    },
    [anchorData.rejected](state, err) {
      console.log(err)
    },
    [anchorData.pending](state) {
      console.log('进行中')
    },
  },
})

// export const { increment, decrement } = recommendSlice.actions
