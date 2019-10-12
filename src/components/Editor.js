import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import decorator from '../decorators'

const StyledEditor = styled(Editor)`
  font-size: 15em;
  overflow: scroll;
  outline: none;
`

const EditorComponent = ({ match }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty(decorator))

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) setEditorState(newState, { decorator: decorator })
  }

  return (
    <StyledEditor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={handleKeyCommand}
    />
  )
}

EditorComponent.propTypes = {
  match: PropTypes.object
}

export default EditorComponent
