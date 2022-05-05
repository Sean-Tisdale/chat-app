import React from 'react'
import { useCContracts } from '../contracts'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { formatEther } from '@ethersproject/units'

export function useC() {
  const contracts = useCContracts()?.Caddress
  const { account } = useWeb3React()
  ///////////////
  // Add Functions //
  ///////////////

  const addUser = async (_account: any) => {
    try {
      const tx = await contracts?.addUser(_account as string, {
        // value: ethers.utils.parseUnits(0.4),
        gasLimit: 1000000,
      })
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error adding user')
    }
  }
  const addAdmin = async (account: any) => {
    try {
      const tx = await contracts?.addAdmin(account as string, {
        // value: ethers.utils.parseUnits(0.4),
        gasLimit: 1000000,
      })
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error adding admin')
    }
  }

  const getPostGasEstimate = async (content: string) => {
    const getGasValue = await contracts?.estimateGas.addPost(content)
  }
  const addPost = async (content: string) => {
    try {
      const tx = await contracts?.addPost(
        ethers.utils.formatBytes32String(content as string),
        {
          gasLimit: 3400000,
        }
      )
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error adding Post')
    }
  }
  const postMood = async (p: any) => {
    console.log(p)
    try {
      const tx = await contracts?.postMood(ethers.BigNumber.from(p), {
        gasLimit: 3400000,
      })
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error posting Mood')
    }
  }
  ///////////////
  // Remove Functions //
  ///////////////

  const removeUser = async () => {}
  const removePost = async (postID: any) => {
    try {
      const tx = await contracts?.removePost(postID, {
        gasLimit: 3400000,
      })
      return await tx?.wait()
    } catch (err) {
      console.error(err, 'error removing Post')
    }
  }
  ///////////////
  // View Functions //
  ///////////////

  const checkUser = async () => {
    try {
      const tx = await contracts?.checkUser(account as string, {
        gasLimit: 1000000,
      })
      return await console.log(tx)
    } catch (err) {
      console.error(err, 'error checking user')
    }
  }
  const checkAdmin = async () => {
    try {
      const tx = await contracts?.checkAdmin(account as string, {
        gasLimit: 1000000,
      })
      return await console.log(tx)
    } catch (err) {
      console.error(err, 'error checking Admin')
    }
  }
  const getPostNumber = async () => {}
  return {
    addUser,
    addAdmin,
    addPost,
    checkAdmin,
    checkUser,
    postMood,
    removePost,
  }
}
