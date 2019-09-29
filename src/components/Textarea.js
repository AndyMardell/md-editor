import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import useContent from '../hooks/useContent'
import PropTypes from 'prop-types'

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

const Textarea = ({ match }) => {
  const slug = match.params.slug
  const { loading, file, saveContent } = useContent({ slug })
  const textareaRef = useRef()

  useEffect(() => {
    if (!loading && file) {
      textareaRef.current.innerHTML = file.file.contents
    }
  }, [loading, file])

  const debouncedSave = debounce(() => {
    saveContent({ slug, contents: textareaRef.current.innerHTML })
  }, 700)

  return (
    <StyledTextarea
      id='mainContent'
      ref={textareaRef}
      contentEditable
      onKeyDown={debouncedSave}
    />
  )
}

Textarea.propTypes = {
  match: PropTypes.object
}

export default Textarea
