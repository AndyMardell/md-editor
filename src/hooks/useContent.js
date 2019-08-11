import { useState } from 'react'

const useContent = () => {
  const [content, setContentState] = useState(null)

  const setContent = inputContent => {
    if (!inputContent) return
    const outputContent = inputContent.replace(new RegExp('(# )'), '<h1>$1</h1>')
    setContentState(outputContent)
    return outputContent
  }

  return { content, setContent }
}

export default useContent
