import { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { convertFromRaw, convertToRaw } from 'draft-js'

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
  const [updateFile] = useMutation(UPDATE_FILE)
  const { loading, data, refetch } = useQuery(FILE, { variables: { slug } })
  const [contentState, setContentState] = useState({})

  useEffect(() => {
    refetch()

    if (!data || !data.file.slug) return

    setContentState({
      slug: data.file.slug,
      contents: data.file.contents && convertFromRaw(JSON.parse(data.file.contents))
    })
  }, [slug, refetch, data])

  const saveContent = (newState) => {
    const rawState = convertToRaw(newState.contents.getCurrentContent())
    updateFile({
      variables: {
        slug: newState.slug,
        contents: JSON.stringify(rawState)
      }
    })
  }

  return {
    loading,
    contentState,
    saveContent
  }
}

export default useContent
