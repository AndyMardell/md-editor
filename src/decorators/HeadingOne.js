import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeadingOne = styled.span`
  font-size: 1.7em;
  font-weight: 600;
`

const HeadingOneDecorator = (props) => (
  <HeadingOne {...props}>
    {props.children}
  </HeadingOne>
)

HeadingOneDecorator.propTypes = {
  children: PropTypes.node
}

export default HeadingOneDecorator
