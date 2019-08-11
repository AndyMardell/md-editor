import React, { useState } from 'react'
import LibraryButton from './LibraryButton'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

const Nav = styled(animated.nav)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #151414;
  border-right: 1px solid black;
  min-height: 100vh;
  padding-top: 80px;
  width: 100%;
  max-width: 450px;

  & > button {
    display: block;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    border-bottom: 1px solid #1E1F1F;
    padding: 15px 20px;
    cursor: pointer;

    &:hover {
      background: #1E1F1F;
    }
  }
`

const Library = () => {
  const [active, setActive] = useState(false)

  const animationProps = useSpring({
    config: config.default,
    from: { left: '-450px' },
    to: { left: active ? '0' : '-450px' }
  })

  return (
    <>
      <LibraryButton active={active} setActive={setActive} />
      <Nav style={animationProps}>
        <button>List</button>
        <button>To-dos</button>
        <button>Shopping</button>
        <button>Wedding list</button>
      </Nav>
    </>
  )
}

export default Library
