import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Hashtag = styled.span`
  background-color: #0C0C0D;
  border: 1px solid #2F2E2E;
  color: #8C8C8C;
  letter-spacing: normal;
  border-radius: 100px;
  font-size: 0.9em;
  padding: 0 12px;
  display: inline-block;
`

const HashtagDecorator = (props) => (
  <Hashtag {...props}>
    {props.children}
  </Hashtag>
)

HashtagDecorator.propTypes = {
  children: PropTypes.node
}

export default HashtagDecorator
