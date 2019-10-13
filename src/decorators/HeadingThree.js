import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeadingThree = styled.span`
  font-size: 1.1em;
  font-weight: 600;
`

const HeadingThreeDecorator = (props) => (
  <HeadingThree {...props}>
    {props.children}
  </HeadingThree>
)

HeadingThreeDecorator.propTypes = {
  children: PropTypes.node
}

export default HeadingThreeDecorator
