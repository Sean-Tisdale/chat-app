import React from 'react'
import Home from '../display/home'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { GlobalStyles } from '../../globalStyles/globalStyles'
import AdminPage from '../admin/adminPage'
import UserProfile from '../user/userProfile'
import { LinkWrapper, LogoutButton, StyledLink } from './landingPage.styles'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

const LandingPage = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React()
  return (
    <Router>
      <GlobalStyles />
      <LinkWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/UserProfile">Profile</StyledLink>
        <StyledLink to="/AdminPage">Admin</StyledLink>
        <LogoutButton onClick={() => deactivate()}>LOGOUT</LogoutButton>
      </LinkWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default LandingPage
