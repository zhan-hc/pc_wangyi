import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { albumData } from '../../store/slices/album'
import { Carousel } from 'antd'
import AlbumCover from '@/components/album-cover'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'

export default memo(function HYNewAlbum() {
  // redux hooks
  const { newAlbums } = useSelector((state) => state.album)
  const dispatch = useDispatch()

  // other hooks
  const pageRef = useRef()
  useEffect(() => {
    dispatch(albumData())
  }, [dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <AlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})
