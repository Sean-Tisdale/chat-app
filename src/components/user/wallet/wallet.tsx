import React, { useEffect, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { formatEther } from '@ethersproject/units'
import { Div, Span } from './wallet.styles'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3],
})

export function Wallet() {
  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>()
  const [accountNum, setAccountNum] = useState<string>(
    account
      ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
      : ''
  )
  const [balance, setBalance] = useState<any>(null)

  const onClick = () => {
    console.log('Clicked')
    activate(injectedConnector)
  }

  useEffect(() => {
    setAccountNum(
      account
        ? `${account.substring(0, 6)}...${account.substring(
            account.length - 4
          )}`
        : ''
    )
  }, [account])

  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(formatEther(balance))
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId])

  return (
    <>
      {active ? (
        <Div>
          <Span>
            Balance:{' '}
            {balance === null
              ? 'error'
              : balance
              ? Math.round(balance * 1e4) / 1e4
              : ''}{' '}
            Eth
          </Span>
          <Span>Account Number: {accountNum}</Span>
        </Div>
      ) : (
        <Div>
          <button onClick={onClick}>Connect Wallet</button>
        </Div>
      )}
    </>
  )
}
