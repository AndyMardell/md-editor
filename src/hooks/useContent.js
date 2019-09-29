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
  const [updateFile] = useMutation(UPDATE_FILE)
  const { loading, data } = useQuery(FILE, {
    variables: { slug }
  })
  const [file, setContentState] = useState()

  useEffect(() => {
    if (!loading) {
      setContentState(data)
    }
  }, [loading, data])

  const saveContent = ({ slug, contents }) => {
    updateFile({ variables: { slug, contents } })
  }

  return { loading, file, saveContent }
}

export default useContent
