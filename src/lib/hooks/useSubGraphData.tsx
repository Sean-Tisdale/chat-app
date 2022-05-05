import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { gql, useLazyQuery } from '@apollo/client'
import { useQuery } from '@apollo/react-hooks'
import { ethers } from 'ethers'
import { PostNumber } from '../../components/posts/postCard.styles'

export const ALL_POSTS = gql`
  query AllPosts {
    posts(first: 1000) {
      id
      content
      postNumber
      mood
      author {
        id
      }
    }
  }
`
export function useCreatedPosts(startQuery?: string) {
  const context = useWeb3React<Web3Provider>()
  const { account } = context
  const {
    data: tokenData,
    loading: tokenLoading,
    error: tokenError,
    refetch: tokenRefetch,
    stopPolling,
    startPolling,
  } = useQuery<any>(ALL_POSTS, {
    variables: {
      author: account,
    },
  })

  const getPosts: any | undefined = React.useMemo(() => {
    const posts: any = []
    if (tokenError) {
      console.error(tokenError)
    }

    if (tokenData) {
      tokenData?.posts.map((i: any) => {
        return posts.push({
          content: ethers.utils.parseBytes32String(i.content),
          postNumber: i.postNumber,
          author: i.author.id,
          mood: i.mood,
          id: i.id,
        })
      })
    }
    return posts
  }, [tokenData, tokenError])
  //   useEffect(() => {
  //     if (tokenRefetch) {
  //       tokenRefetch({ variables: { author: account } })
  //     }
  //   }, [account, getPosts, tokenRefetch])

  return { getPosts }
}
