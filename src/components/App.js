import React, { useEffect } from 'react'
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

const App = () => {
  const saveHandler = (e) => {
    const charCode = String.fromCharCode(e.which).toLowerCase()
    if ((e.ctrlKey || e.metaKey) && charCode === 's') {
      e.preventDefault()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', saveHandler)
    return () => document.removeEventListener('keydown', saveHandler)
  }, [])

  return (
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
}

export default App
