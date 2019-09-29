import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const FILES = gql`
  query getFiles {
    files {
      slug
      name
    }
  }
`

const useDocument = () => {
  let [documents, savedDocuments] = useState([])
  const { loading, data } = useQuery(FILES)

  useEffect(() => {
    if (!loading) {
      savedDocuments(data.files)
    }
  }, [loading, data])

  const addDocument = (documentDetails, overwrite) => {
    if (!documentDetails.name) return { saved: false }
    if (overwrite) {
      documents = documents.filter(document =>
        document.name !== documentDetails.name)
      documentDetails.name = documentDetails.newName
      delete documentDetails.newName
    }
    savedDocuments([
      {
        name: documentDetails.name,
        editable: documentDetails.editable
      },
      ...documents
    ])
    return { ...documentDetails, saved: true }
  }

  return { loading, documents, addDocument }
}

export default useDocument
