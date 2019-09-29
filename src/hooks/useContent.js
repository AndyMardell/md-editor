import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const FILE = gql`
  query getFile($slug: String!) {
    file(slug: $slug) {
      slug
      name
      contents
    }
  }
`

const UPDATE_FILE = gql`
  mutation update(
    $slug: String!
    $name: String
    $contents: String
  ) {
    update(
      slug: $slug
      name: $name
      contents: $contents
    ) {
      slug
      name
      contents
    }
  }
`

const useContent = ({ slug }) => {
  const [contentState, setContentState] = useState()
  const [updateFile] = useMutation(UPDATE_FILE)
  const { loading, data } = useQuery(FILE, { variables: { slug } })

  useEffect(() => updateContent(), [slug])

  const updateContent = () => {
    if (loading || !data) return
    setContentState({ slug, contents: data.file.contents })
  }

  const saveContent = (saved) => {
    setContentState({ slug: saved.slug, contents: saved.contents })
    updateFile({
      variables: {
        slug: saved.slug,
        contents: saved.contents
      }
    })
  }

  return { loading, contentState, saveContent }
}

export default useContent
