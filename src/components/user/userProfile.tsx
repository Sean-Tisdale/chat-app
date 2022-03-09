import React, { useEffect, useState } from 'react'
import {
  DisabledGiveMoodButton,
  UserProfileWrapper,
} from './userProfile.styles'
import { Wallet } from './wallet/wallet'
import { NewPostWrapper, PostNumber, NewPost } from '../posts/postCard.styles'
import { useWeb3React } from '@web3-react/core'

const UserProfile = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React()
  const [display, setDisplay] = useState<boolean>(false)
  useEffect(() => {
    active ? setDisplay(true) : setDisplay(false)
  }, [active])
  return (
    <>
      <UserProfileWrapper>
        <Wallet />
        <NewPostWrapper display={display}>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>1</PostNumber>
        </NewPostWrapper>

        <NewPostWrapper display={display}>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>2</PostNumber>
        </NewPostWrapper>
      </UserProfileWrapper>
    </>
  )
}

export default UserProfile
