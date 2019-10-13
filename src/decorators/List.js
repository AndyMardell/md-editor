import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.span`

`

const ListDecorator = (props) => (
  <List {...props}>
    {props.children}
  </List>
)

ListDecorator.propTypes = {
  children: PropTypes.node
}

export default ListDecorator
