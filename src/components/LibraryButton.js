import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  background: transparent;
  border: none;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  height: 34px;
  cursor: pointer;
`

const Burger = styled.div`
  width: 25px;
  margin-right: 10px;

  & > span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: white;
    margin-bottom: 6px;
    transition: 300ms all ease;

    ${({ active }) => active && `
      margin-bottom: -2px;
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    `}

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const LibraryButton = ({ active, setActive }) => (
  <Button onClick={() => setActive(!active)}>
    <Burger active={active}>
      <span />
      <span />
      <span />
    </Burger>
    <span>{active ? 'Close' : 'Library'}</span>
  </Button>
)

LibraryButton.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func
}

export default LibraryButton
