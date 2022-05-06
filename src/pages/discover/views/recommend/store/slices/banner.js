import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const bannerData = createAsyncThunk('recommend/getBanner', async () => {
  const res = await request({
    url: '/banner',
  })
  return res // 此处的返回结果会在 .fulfilled中作为payload的值
})

export const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banners: [],
  },
  reducers: {},
  extraReducers: {
    [bannerData.fulfilled](state, { payload }) {
      console.log(payload, 'swiperswiperswiper')
      state.banners = payload.banners
    },
    [bannerData.rejected](state, err) {
      console.log(err)
    },
    [bannerData.pending](state) {
      console.log('进行中')
    },
  },
})

// export const { increment, decrement } = recommendSlice.actions
