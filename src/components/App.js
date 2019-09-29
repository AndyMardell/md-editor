import React from 'react'
import Textarea from './Textarea'
import Library from './Library'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <main>
        <Library />
        <Textarea slug='slugtest' />
      </main>
    </div>
  </ApolloProvider>
)

export default App
