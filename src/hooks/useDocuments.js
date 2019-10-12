import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const FILES = gql`
  query getFiles {
    files {
      slug
      name
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

const useDocument = () => {
  let [documents, setDocuments] = useState([])
  const [updateFile] = useMutation(UPDATE_FILE)
  const { loading, data } = useQuery(FILES)

  useEffect(() => {
    if (loading || !data) return
    setDocuments(data.files)
  }, [loading, data])

  const updateDocument = async (updatedData) => {
    if (!updatedData.slug) return { saved: false }
    const updatedDocument = updateFile({ variables: updatedData })
    setDocuments([updatedData, ...documents])
    return updatedDocument
  }

  return { loading, documents, updateDocument }
}

export default useDocument
