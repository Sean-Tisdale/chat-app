import React, { useEffect, useState } from 'react'
import {
  Post,
  PostInput,
  PostInputWrapper,
  PostButton,
  NewPostWrapper,
  PostNumber,
  NewPost,
  GiveMoodButton,
} from './postCard.styles'
import { useC } from '../../lib/hooks/useC'
import { useWeb3React } from '@web3-react/core'

const PostCard = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React()
  const { addPost } = useC()
  const [content, setContent] = useState<string>('')
  const [display, setDisplay] = useState<boolean>(false)
  useEffect(() => {
    active ? setDisplay(true) : setDisplay(false)
  }, [active])

  const handlePost = async (e: any) => {
    e.preventDefault()
    setContent(e.target.value)
    await addPost(content)
  }
  const handleChange = (e: any) => {
    e.preventDefault()
    setContent(e.target.value)
  }

  return (
    <>
      <Post display={display}>
        <PostInputWrapper>
          <PostInput
            placeholder="Add Post"
            value={content}
            onChange={handleChange}
          />
          <PostButton onClick={handlePost}>Create Post</PostButton>
        </PostInputWrapper>
      </Post>
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>1</PostNumber>
      </NewPostWrapper>
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>2</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>3</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>4</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>5</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>6</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper display={display}>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>7</PostNumber>
      </NewPostWrapper>
    </>
  )
}

export default PostCard
