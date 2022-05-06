import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { dicoverMenu } from '@/common/local-data'
import { TopMenu, DiscoverWrap } from './style'
export default memo(function Discover(props) {
  return (
    <DiscoverWrap>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, i) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      <Outlet></Outlet>
    </DiscoverWrap>
  )
})
