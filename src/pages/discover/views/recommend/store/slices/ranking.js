import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/services/request'

export const rankingData = createAsyncThunk(
  'recommend/getRanking',
  async (id = 0) => {
    const res = await request({
      url: '/playlist/detail',
      params: {
        id,
      },
    })
    return res // 此处的返回结果会在 .fulfilled中作为payload的值
  }
)

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState: {
    upRanking: [],
    newRanking: [],
    originRanking: [],
  },
  reducers: {},
  extraReducers: {
    [rankingData.fulfilled](state, { payload }) {
      // console.log(state, res, 'ranking=======================')
      if (payload.playlist.name === '飙升榜') state.upRanking = payload.playlist
      else if (payload.playlist.name === '新歌榜')
        state.newRanking = payload.playlist
      else if (payload.playlist.name === '原创榜')
        state.originRanking = payload.playlist
    },
    [rankingData.rejected](state, err) {
      console.log(err)
    },
    [rankingData.pending](state) {
      console.log('进行中')
    },
  },
})
