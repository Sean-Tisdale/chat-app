import React, { useEffect, useState } from 'react'
import { UserProfileWrapper } from './userProfile.styles'
import { Wallet } from './wallet/wallet'
import {
  NewPostWrapper,
  PostNumber,
  NewPostContent,
  GiveMoodButton,
  ContentWrapper,
  MoodDisplay,
  PostAndMoodWrapper,
  PostAuthor,
} from '../posts/postCard.styles'
import { useWeb3React } from '@web3-react/core'
import { useCreatedPosts } from '../../lib/hooks/useSubGraphData'

const UserProfile = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React()
  const [display, setDisplay] = useState<boolean>(false)
  const p = useCreatedPosts()
  useEffect(() => {
    active ? setDisplay(true) : setDisplay(false)
  }, [active])
  return (
    <>
      <Wallet />
      {account &&
        p.getPosts.map((item: any) => (
          <>
            <NewPostWrapper display={display}>
              <GiveMoodButton home={false}>GIVE MOOD</GiveMoodButton>
              <ContentWrapper>
                <PostAndMoodWrapper>
                  <MoodDisplay>Mood: {item.mood}</MoodDisplay>
                  <PostAuthor>
                    {item.author.substring(0, 4)}...
                    {item.author.substring(item.author.length - 4)}
                  </PostAuthor>
                </PostAndMoodWrapper>
                <NewPostContent key={account}>{item.content}</NewPostContent>
              </ContentWrapper>
              <PostNumber>{item.postNumber}</PostNumber>
            </NewPostWrapper>
          </>
        ))}
    </>
  )
}

export default UserProfile
