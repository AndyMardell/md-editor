import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.div`
  font-size: 1em;
  width: calc(100vw - (110vw - 1000px));
  height: 80vh;
  padding: 10vh calc((110vw - 1000px) / 2);
  overflow: scroll;
  outline: none;

  @media (max-width: 1000px) {
    width: calc(100vw - 10vw);
    padding: 10vh 5vw;
  }
`

const Textarea = () => {
  const handleSave = (e) => {
    if (e.which === 83 && e.metaKey) e.preventDefault()
  }

  return (
    <StyledTextarea
      id='mainContent'
      contentEditable
      onKeyDown={e => handleSave(e)}
    ></StyledTextarea>
  )
}

export default Textarea
