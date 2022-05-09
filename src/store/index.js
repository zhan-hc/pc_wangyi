import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { hotRecommendSlices } from '@/pages/discover/views/recommend/store/slices/hotRecommend'
import { bannerSlice } from '@/pages/discover/views/recommend/store/slices/banner'
import { albumSlice } from '@/pages/discover/views/recommend/store/slices/album'
import { rankingSlice } from '@/pages/discover/views/recommend/store/slices/ranking'
import { singerSlice } from '@/pages/discover/views/recommend/store/slices/singer'
import { anchorSlice } from '@/pages/discover/views/recommend/store/slices/anchor'
const store = configureStore({
  reducer: {
    banner: bannerSlice.reducer,
    hotRecommend: hotRecommendSlices.reducer,
    album: albumSlice.reducer,
    ranking: rankingSlice.reducer,
    singer: singerSlice.reducer,
    anchor: anchorSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({})
  // },
})

export default store
