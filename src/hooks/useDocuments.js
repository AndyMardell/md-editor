import { useState, useEffect } from 'react'

// NOTE: Temp array representing a datastore
const existingDocuments = [
  { name: 'List' },
  { name: 'To-dos' },
  { name: 'Shopping' },
  { name: 'Wedding list' }
]

const useDocument = () => {
  let [documents, savedDocuments] = useState([])

  useEffect(() => {
    savedDocuments(existingDocuments)
  }, [])

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

  return { documents, addDocument }
}

export default useDocument
