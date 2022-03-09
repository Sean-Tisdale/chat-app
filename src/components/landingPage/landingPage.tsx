import React, { useEffect, useState } from 'react'
import Home from '../display/home'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from 'react-router-dom'
import { GlobalStyles } from '../../globalStyles/globalStyles'
import AdminPage from '../admin/adminPage'
import UserProfile from '../user/userProfile'
import { LinkWrapper, LogoutButton, StyledLink } from './landingPage.styles'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useC } from '../../lib/hooks/useC'

const LandingPage = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React()
  const { checkAdmin } = useC()
  const [display, setDisplay] = useState<boolean>(false)

  useEffect(() => {
    if (active) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [active])

  return (
    <Router>
      <GlobalStyles />
      <LinkWrapper>
        <StyledLink to="/" display={true}>
          Home
        </StyledLink>
        <StyledLink to="/UserProfile" display={display}>
          Profile
        </StyledLink>
        <StyledLink to="/AdminPage" display={display}>
          Admin
        </StyledLink>
        <LogoutButton to="/" onClick={() => deactivate()}>
          LOGOUT
        </LogoutButton>
      </LinkWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserProfile" element={active && <UserProfile />} />
        <Route path="/AdminPage" element={active && <AdminPage />} />
      </Routes>
    </Router>
  )
}

export default LandingPage
