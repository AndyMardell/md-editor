import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  background: transparent;
  border: none;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  height: 34px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 500;
  letter-spacing: 1px;

  ${({ active }) => !active && `
    &:hover span:nth-child(3) {
      transform: rotate(0);
    }
  `}
`

const Burger = styled.div`
  height: 25px;
  width: 25px;
  margin-right: 10px;

  & > span {
    display: inline-block;
    width: 3px;
    height: 100%;
    background-color: #CCCBCB;
    margin-right: 6px;
    transition: 300ms all ease;

    &:nth-child(1) {
      height: 90%
    }
    &:nth-child(3) {
      height: 80%
      transform: rotate(-10deg);
    }

    ${({ active }) => active && `
      margin-right: -2px;
      &:nth-child(1) {
        height: 100%;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        height: 100%;
        transform: rotate(-45deg);
      }
    `}

    &:last-child {
      margin-right: 0;
    }
  }
`

const LibraryButton = ({ active, setActive }) => (
  <Button active={active} onClick={() => setActive(!active)}>
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
