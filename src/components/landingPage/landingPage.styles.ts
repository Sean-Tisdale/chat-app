import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`
export const StyledLink = styled(Link)`
  background-color: green;
  color: white;
  font-size: 1em;
  height: 70px;
  width: 70px;
  line-height: 70px;
  border-radius: 50%;
  text-decoration: none;
`
export const LogoutButton = styled.button`
  background-color: red;
  color: white;
  font-size: 0.8em;
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
`
