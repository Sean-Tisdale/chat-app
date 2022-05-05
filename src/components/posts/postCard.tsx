import React, { useEffect, useState } from 'react'
import {
  Post,
  PostInput,
  PostInputWrapper,
  PostButton,
  NewPostWrapper,
  PostNumber,
  NewPostContent,
  GiveMoodButton,
  PostAuthor,
  ContentWrapper,
  MoodDisplay,
  PostAndMoodWrapper,
} from './postCard.styles'
import { useC } from '../../lib/hooks/useC'
import { useWeb3React } from '@web3-react/core'
import { useCreatedPosts } from '../../lib/hooks/useSubGraphData'

const PostCard = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React()
  const { addPost, postMood, removePost } = useC()
  const [content, setContent] = useState<string>('')
  const [display, setDisplay] = useState<boolean>(false)
  const [postID, setPostID] = useState<any>()
  const p = useCreatedPosts()
  useEffect(() => {
    active ? setDisplay(true) : setDisplay(false)
  }, [active])
  const handlePost = async (e: any) => {
    e.preventDefault()
    setContent(e.target.value)
    await addPost(content)
  }
  console.log(p, p.getPosts.id)

  const handleGiveMood = async () => {
    p.getPosts.map(async (i: any) => {
      return await postMood(p.getPosts.id)
    })
  }
  const handleRemovePost = (e: any) => {
    removePost(e.target.id)
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

      {account &&
        p.getPosts.map((item: any) => (
          <>
            <NewPostWrapper display={display}>
              <GiveMoodButton
                home={true}
                onClick={() => {
                  postMood(item.postNumber)
                }}
              >
                GIVE MOOD
              </GiveMoodButton>
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
              <PostNumber onClick={() => removePost(item.id)}>
                {item.postNumber}
              </PostNumber>
            </NewPostWrapper>
          </>
        ))}
    </>
  )
}

export default PostCard
