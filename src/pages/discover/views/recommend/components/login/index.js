import React, { memo } from 'react'
import { LoginWrapper } from './style'
export default memo(function Login() {
  return (
    <LoginWrapper>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button>用户登录</button>
    </LoginWrapper>
  )
})
