import { useEffect } from 'react'
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
  const { loading, data, refetch } = useQuery(FILE, { variables: { slug } })

  useEffect(() => refetch, [slug, refetch])

  const saveContent = (saved) => {
    updateFile({
      variables: {
        slug: saved.slug,
        contents: saved.contents
      }
    })
  }

  return { loading, contentState: data, saveContent }
}

export default useContent
