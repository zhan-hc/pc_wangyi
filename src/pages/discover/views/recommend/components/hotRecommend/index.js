import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { recommendData } from '../../store/slices/hotRecommend'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'
// import { getHotRecommendAction } from '../../store/actionCreators'

export default memo(function HYHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector((state) => state.hotRecommend)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(recommendData())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongsCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})
