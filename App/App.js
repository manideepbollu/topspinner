import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import RootScreen from './Containers/Root/RootScreen'

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://18.218.32.169/graphql/'
})

const client = new ApolloClient({
  cache,
  link,
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootScreen />
      </ApolloProvider>
    )
  }
}
