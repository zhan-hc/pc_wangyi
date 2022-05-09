import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-utils'

import { SingerCoverWrapper } from './style'

export default memo(function SingerCover(props) {
  const { info } = props

  return (
    <SingerCoverWrapper>
      <div className="cover-left">
        <img src={getSizeImage(info.picUrl, 62)} alt="" />
      </div>
      <div className="cover-right">
        <div className="name text-nowrap">{info.name}</div>
        <p className="desc text-nowrap">热门歌手</p>
      </div>
    </SingerCoverWrapper>
  )
})
