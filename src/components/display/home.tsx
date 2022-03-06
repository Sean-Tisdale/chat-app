import React from 'react'
import { AccountDisplay } from './home.styles'

const Home = () => {
  const connected: boolean = false
  return <AccountDisplay connected={connected}>home component</AccountDisplay>
}
export default Home
