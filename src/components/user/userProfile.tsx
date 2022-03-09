import React from 'react'
import {
  DisabledGiveMoodButton,
  UserProfileWrapper,
} from './userProfile.styles'
import { Wallet } from './wallet/wallet'
import { NewPostWrapper, PostNumber, NewPost } from '../posts/postCard.styles'

const UserProfile = () => {
  return (
    <>
      <UserProfileWrapper>
        <Wallet />
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>1</PostNumber>
        </NewPostWrapper>

        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>2</PostNumber>
        </NewPostWrapper>
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>3</PostNumber>
        </NewPostWrapper>
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>4</PostNumber>
        </NewPostWrapper>
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>5</PostNumber>
        </NewPostWrapper>
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>6</PostNumber>
        </NewPostWrapper>
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>7</PostNumber>
        </NewPostWrapper>
        <NewPostWrapper>
          <DisabledGiveMoodButton>Give Mood</DisabledGiveMoodButton>
          <NewPost>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            culpa neque nulla, a dignissimos at tempore temporibus doloribus
            inventore sit ducimus! Nostrum consequatur modi nobis quidem quas
            iure inventore. Vel.
          </NewPost>
          <PostNumber>8</PostNumber>
        </NewPostWrapper>
      </UserProfileWrapper>
    </>
  )
}

export default UserProfile
