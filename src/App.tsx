import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useCContracts } from './lib/contracts'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import LandingPage from './components/landingPage/landingPage'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/react-hooks'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}
const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/23120/chat-app-subgraph/v5',
  cache: new InMemoryCache(),
})

function App() {
  const foo = useCContracts()
  console.log(
    foo?.Caddress.functions,
    'line 8, list of functions from smart contract'
  )
  return <LandingPage />
}

function wrappedApp() {
  return (
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </ApolloProvider>
  )
}
export default wrappedApp
