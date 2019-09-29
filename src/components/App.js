import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Textarea from './Textarea'
import Library from './Library'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Global from '../styles'
import Typography from '../styles/typography'
import 'normalize-css'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API
})

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Global />
      <Typography />
      <div className='App'>
        <main>
          <Library />
          <Switch>
            <Route path='/:slug' component={Textarea} />
          </Switch>
        </main>
      </div>
    </ApolloProvider>
  </Router>
)

export default App
