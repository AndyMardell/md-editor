import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import useContent from '../hooks/useContent'
import decorator from '../decorators'
import { Editor, EditorState, RichUtils } from 'draft-js'

const StyledEditor = styled(Editor)`
  font-size: 15em;
  overflow: scroll;
  outline: none;
`

const EditorComponent = ({ match }) => {
  const { slug } = match.params
  const { loading, contentState, saveContent } = useContent({ slug })
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(decorator)
  )

  useEffect(() => {
    if (loading || !contentState.contents) return
    const savedState = EditorState.createWithContent(contentState.contents)
    setEditorState(EditorState.set(savedState, { decorator }))
  }, [loading, contentState])

  const debouncedSave = debounce((newState) => {
    saveContent({ slug, contents: newState })
  }, 700)

  const onChange = (state) => {
    setEditorState(state)
    debouncedSave(state)
  }

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (!newState) return
    setEditorState(newState)
  }

  return (
    <StyledEditor
      editorState={editorState}
      onChange={onChange}
      handleKeyCommand={handleKeyCommand}
    />
  )
}

EditorComponent.propTypes = {
  match: PropTypes.object
}

export default EditorComponent
