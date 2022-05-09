import React, { memo, useEffect } from 'react'
import { RecommendrWrap, Content, RecommendLeft, RecommendRight } from './style'
import Banner from './components/banner'
import HotRecommend from './components/hotRecommend'
import Album from './components/album'
import Ranking from './components/ranking'
import Login from './components/login'
import Singer from './components/singer'
import Anchor from './components/anchor'
export default memo(function Recommend() {
  // const { banners } = useSelector((state) => state.recommend)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(bannerData())
  // }, [dispatch])
  return (
    <RecommendrWrap>
      <Banner></Banner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <Album />
          <Ranking />
        </RecommendLeft>
        <RecommendRight>
          <Login />
          <Singer />
          <Anchor />
        </RecommendRight>
      </Content>
    </RecommendrWrap>
  )
})
