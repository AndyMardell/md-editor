import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeadingTwo = styled.span`
  font-size: 1.3em;
  font-weight: 600;
`

const HeadingTwoDecorator = (props) => (
  <HeadingTwo {...props}>
    {props.children}
  </HeadingTwo>
)

HeadingTwoDecorator.propTypes = {
  children: PropTypes.node
}

export default HeadingTwoDecorator
