import React from 'react'
import Home from '../../components/display/home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Wallet } from '../../components/user/wallet/wallet'
import { GlobalStyles } from '../../globalStyles/globalStyles'

const LandingPage = () => {
  return (
    <Router>
      <GlobalStyles />
      <Wallet />
      <Home />
    </Router>
  )
}

export default LandingPage
