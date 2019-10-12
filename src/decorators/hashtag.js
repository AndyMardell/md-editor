import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Hashtag = styled.span`
  background-color: red;
`

const HashtagSpan = (props) => (
  <Hashtag {...props}>
    {props.children}
  </Hashtag>
)

HashtagSpan.propTypes = {
  children: PropTypes.node
}

export default HashtagSpan
