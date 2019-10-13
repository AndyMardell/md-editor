import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Editor } from 'draft-js'
import useEditor from '../hooks/useEditor'

const StyledEditor = styled(Editor)`
  font-size: 15em;
  overflow: scroll;
  outline: none;
`

const EditorComponent = ({ match }) => {
  const {
    editorState,
    onChange,
    handleKeyCommand
  } = useEditor(match.params.slug)

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
