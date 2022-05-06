import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@/router'
import store from '@/store'

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
export default memo(function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter />
    </Provider>
  )
})
