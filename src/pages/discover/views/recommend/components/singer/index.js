import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopListHeader from '@/components/top-list-header'
import SingerCover from '@/components/singer-cover'
import { SingerWrapper } from './style'
import { singerData } from '../../store/slices/singer'
export default memo(function HYSettleSinger() {
  const { newSingers } = useSelector((state) => state.singer)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(singerData())
  }, [dispatch])
  return (
    <SingerWrapper>
      <TopListHeader title="入驻歌手" right="查看全部 &gt;" />
      {newSingers.map((item) => {
        return <SingerCover info={item} key={item.id} />
      })}
      <button>申请成为网易音乐人</button>
    </SingerWrapper>
  )
})
