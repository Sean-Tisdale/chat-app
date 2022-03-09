import React from 'react'
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

const PostCard = () => {
  const { addPost } = useC()
  const [content, setContent] = React.useState<string>('')

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
      <Post>
        <PostInputWrapper>
          <PostInput
            placeholder="Add Post"
            value={content}
            onChange={handleChange}
          />
          <PostButton onClick={handlePost}>Create Post</PostButton>
        </PostInputWrapper>
      </Post>
      <NewPostWrapper>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>1</PostNumber>
      </NewPostWrapper>
      <NewPostWrapper>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>2</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>3</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>4</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>5</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper>
        <GiveMoodButton>Give Mood</GiveMoodButton>
        <NewPost>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          culpa neque nulla, a dignissimos at tempore temporibus doloribus
          inventore sit ducimus! Nostrum consequatur modi nobis quidem quas iure
          inventore. Vel.
        </NewPost>
        <PostNumber>6</PostNumber>
      </NewPostWrapper>{' '}
      <NewPostWrapper>
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
