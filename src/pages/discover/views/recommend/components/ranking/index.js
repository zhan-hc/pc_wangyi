import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { rankingData } from '../../store/slices/ranking'

export default memo(function HYRecomendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => state.ranking
  )
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(rankingData(19723756))
    dispatch(rankingData(3779629))
    dispatch(rankingData(2884035))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
