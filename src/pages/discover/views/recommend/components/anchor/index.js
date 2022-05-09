import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopListHeader from '@/components/top-list-header'
import { AnchorWrapper } from './style'
import { anchorData } from '../../store/slices/anchor'
export default memo(function HotAnchor() {
  const { hotAnchors } = useSelector((state) => state.anchor)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(anchorData())
  }, [dispatch])
  return (
    <AnchorWrapper>
      <TopListHeader title="热门主播" />
      {hotAnchors.map((item) => {
        return (
          <div className="anchor-item">
            <img src={item.avatarUrl} alt="热门主播"></img>
            <div className="item-info">
              <div className="text-nowrap">{item.nickName}</div>
              <div className="item-desc">热门电台主播</div>
            </div>
          </div>
        )
      })}
    </AnchorWrapper>
  )
})
