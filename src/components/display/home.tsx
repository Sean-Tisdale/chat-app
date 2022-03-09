import React from 'react'
import PostCard from '../posts/postCard'
import { Wallet } from '../user/wallet/wallet'
import { HomePageWrapper, PostDisplayWrapper } from './home.styles'

const Home = () => {
  return (
    <>
      <HomePageWrapper>
        <PostDisplayWrapper>
          <Wallet />
          <PostCard />
        </PostDisplayWrapper>
      </HomePageWrapper>
    </>
  )
}
export default Home
