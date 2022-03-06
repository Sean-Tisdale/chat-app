import React from 'react'
import { useCContracts } from '../contracts'
import { useWeb3React } from '@web3-react/core'

export function useC() {
  const contracts = useCContracts()?.Caddress
  const { account } = useWeb3React()
  ///////////////
  // Add Functions //
  ///////////////

  const addUser = async () => {
    try {
      const tx = await contracts?.addUser(account as string)
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error adding user')
    }
  }
  const addAdmin = async () => {
    try {
      const tx = await contracts?.addAdmin(account as string)
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error adding admin')
    }
  }
  const addPost = async () => {}
  const postMood = async () => {}
  ///////////////
  // Remove Functions //
  ///////////////

  const removeUser = async () => {}
  const removePost = async () => {}
  ///////////////
  // View Functions //
  ///////////////

  const checkUser = async () => {}
  const checkAdmin = async () => {}
  const getPostNumber = async () => {}
  return {
    addUser,
    addAdmin,
  }
}
