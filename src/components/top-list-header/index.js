import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { TopListHeaderWrap } from './style'

const TopListHeader = memo(function TopListHeader(props) {
  // props and state
  const { title, right } = props

  return (
    <TopListHeaderWrap>
      <div className="title">{title}</div>
      <a className="right" href="/">
        {right}
      </a>
    </TopListHeaderWrap>
  )
})

TopListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  right: PropTypes.string,
}

TopListHeader.defaultProps = {
  right: '',
}

export default TopListHeader
