import React from 'react'
import styled from 'styled-components'

export const AccountDisplay = styled.div`
  height: 20vh;
  width: 10vw;
  border: 1px solid white;
  color: white;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${(props: { connected: boolean }) =>
    props.connected ? `display: inherit` : `display: none`};
`
