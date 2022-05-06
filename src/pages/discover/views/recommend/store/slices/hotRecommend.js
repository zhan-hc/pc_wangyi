import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const recommendData = createAsyncThunk(
  'recommend/getHotRecommend',
  async (limit = 8) => {
    const res = await request({
      url: '/personalized',
      params: {
        limit,
      },
    })
    return res // 此处的返回结果会在 .fulfilled中作为payload的值
  }
)

export const hotRecommendSlices = createSlice({
  name: 'hotRecommend',
  initialState: {
    hotRecommends: [],
  },
  reducers: {},
  extraReducers: {
    [recommendData.fulfilled](state, { payload }) {
      console.log(payload, 'hotrecommend')
      state.hotRecommends = payload.result
    },
    [recommendData.rejected](state, err) {
      console.log(err)
    },
    [recommendData.pending](state) {
      console.log('进行中')
    },
  },
})

// export const { increment, decrement } = recommendSlice.actions
