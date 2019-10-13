import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'
import useContent from '../hooks/useContent'
import decorator from '../decorators'
import { EditorState, RichUtils } from 'draft-js'

const useEditor = (slug) => {
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

  return {
    editorState,
    onChange,
    handleKeyCommand
  }
}

export default useEditor
