import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const bannerData = createAsyncThunk('recommend/getBanner', async () => {
  const res = await request({
    url: '/banner',
  })
  return res // 此处的返回结果会在 .fulfilled中作为payload的值
})
export const recommendData = createAsyncThunk(
  'recommend/getRecommend',
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

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    count: 0,
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    upRanking: [],
    newRanking: [],
    originRanking: [],
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
    [albumData.fulfilled](state, { payload }) {
      console.log(payload, 'albumData')
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

export const { increment, decrement } = recommendSlice.actions
export { recommendSlice }
