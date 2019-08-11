import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.div`
  font-size: 1em;
  width: calc(100% - 60vw);
  height: 80vh;
  padding: 10vh 30vw;
  overflow: scroll;
  outline: none;
`

const Textarea = () => (
  <StyledTextarea
    id='mainContent'
    contentEditable
  >
  </StyledTextarea>
)

export default Textarea
