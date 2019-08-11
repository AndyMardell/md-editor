import React, { useState } from 'react'
import LibraryButton from './LibraryButton'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import useDocuments from '../hooks/useDocuments'

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
  max-width: 350px;

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

    &:active, &:focus {
      outline: none;
      background: #0B0B0C;
    }
  }
`

const Library = () => {
  const [active, setActive] = useState(false)
  const { documents, addDocument } = useDocuments()

  const animationProps = useSpring({
    config: config.default,
    from: { left: '-350px' },
    to: { left: active ? '0' : '-350px' }
  })

  const handleAdd = () => {
    addDocument({
      name: 'New Document',
      editable: true
    })
  }

  const handleRename = ({ e, item }) => {
    addDocument({
      name: item.name,
      newName: e.target.innerText,
      editable: false
    }, true)
  }

  return (
    <>
      <LibraryButton active={active} setActive={setActive} />
      <Nav style={animationProps}>
        <button onClick={handleAdd}>+ New</button>
        {documents.map((item, i) => (
          <button
            key={i}
            contentEditable={item.editable}
            onBlur={e => item.editable ? handleRename({ e, item }) : null}
          >
            {item.name}
          </button>
        ))}
      </Nav>
    </>
  )
}

export default Library
