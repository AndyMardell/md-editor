import React, { useRef, useEffect, useState } from 'react'
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
  const { loading, contentState, saveContent } = useContent({ slug })
  const [needsUpdating, setNeedsUpdating] = useState(true)
  const textareaRef = useRef()

  useEffect(() => {
    if (loading || !contentState) return
    if (contentState.slug !== slug) setNeedsUpdating(true)
    if (needsUpdating) {
      setNeedsUpdating(false)
      textareaRef.current.innerHTML = contentState.contents
    }
  }, [contentState, slug, loading])

  const debouncedSave = debounce(() => {
    console.log(textareaRef.current.innerHTML)
    saveContent({ slug, contents: textareaRef.current.innerHTML })
  }, 700)

  if (!contentState) return null

  return (
    <StyledTextarea
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
