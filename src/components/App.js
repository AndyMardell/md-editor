import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Editor from './Editor'
import Library from './Library'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Global from '../styles'
import 'draft-js/dist/Draft.css'
import styled from 'styled-components'

const client = new ApolloClient({ uri: process.env.REACT_APP_API })

const Main = styled.main`
  width: calc(100vw - (110vw - 1000px));
  height: 80vh;
  padding: 10vh calc((110vw - 1000px) / 2);

  @media (max-width: 1000px) {
    width: calc(100vw - 10vw);
    padding: 10vh 5vw;
  }
`

const App = () => {
  const saveHandler = (e) => {
    const charCode = String.fromCharCode(e.which).toLowerCase()
    if ((e.ctrlKey || e.metaKey) && charCode === 's') {
      // The app saves automatically, so just preventDefault
      // TODO: Add a notification or something
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
        <Main>
          <Library />
          <Switch>
            <Route path='/:slug' component={Editor} />
          </Switch>
        </Main>
      </ApolloProvider>
    </Router>
  )
}

export default App
