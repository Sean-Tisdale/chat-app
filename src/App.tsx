import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useCContracts } from './lib/contracts'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import LandingPage from './lib/landingPage/landingPage'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

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
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}
export default wrappedApp
