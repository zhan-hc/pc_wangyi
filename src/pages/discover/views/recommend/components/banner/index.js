import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Carousel } from 'antd'
import { bannerData } from '../../store/slices/banner'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
export default memo(function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联: 获取数据和进行操作
  const { banners } = useSelector((state) => state.banner)
  const dispatch = useDispatch()

  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(bannerData())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  }, [])

  // 其他业务逻辑
  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay ref={bannerRef} beforeChange={bannerChange}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
