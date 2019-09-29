import React, { useState } from 'react'
import LibraryButton from './LibraryButton'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import useDocuments from '../hooks/useDocuments'
import slugify from 'slugify'
import { Link } from 'react-router-dom'

const Nav = styled(animated.nav)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #151414;
  border-right: 1px solid black;
  height: 100vh;
  overflow: scroll;
  padding-top: 80px;
  width: 100%;
  max-width: 350px;

  & > a, & > button {
    display: block;
    box-sizing: border-box;
    width: 100%;
    color: inherit;
    text-decoration: none;
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
  const { loading, documents, updateDocument } = useDocuments()
  const [addingNewFile, setAddingNewFile] = useState(false)

  const animationProps = useSpring({
    config: config.default,
    from: { left: '-350px' },
    to: { left: active ? '0' : '-350px' }
  })

  const handleCreate = (e) => {
    if (e.which !== 13) return
    e.preventDefault()
    updateDocument({
      name: e.target.innerText,
      slug: slugify(e.target.innerText),
      contents: ''
    })
    e.target.innerText = '+ New'
    setAddingNewFile(false)
  }

  if (loading) return null

  return (
    <>
      <LibraryButton active={active} setActive={setActive} />
      <Nav style={animationProps}>
        <button>
          <span
            onClick={() => setAddingNewFile(true)}
            contentEditable={addingNewFile}
            onKeyUp={handleCreate}
          >
            + New
          </span>
        </button>
        {documents.map((item, i) => (
          <Link key={i} to={item.slug}>
            {item.name}
          </Link>
        ))}
      </Nav>
    </>
  )
}

export default Library
