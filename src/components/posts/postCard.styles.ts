import styled from 'styled-components'

export const Post = styled.div`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 80px;
  border: solid 2px black;
  height: 20vh;
  width: 40vw;
  border-radius: 15px;
  display: ${(props: { display: any }) => (props.display ? '' : 'none')};
`
export const PostInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 2vh;
  width: 20vw;
`
export const PostInput = styled.textarea`
  height: 8vh;
  resize: none;
  outline: none;
`
export const PostButton = styled.button`
  cursor: pointer;
  margin-top: 5px;
`
export const NewPostWrapper = styled.div`
  margin: auto;
  background-color: #ba7eb0;
  margin-top: 40px;
  border: solid 2px black;
  height: 30vh;
  width: 40vw;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  display: ${(props: { display: any }) => (props.display ? '' : 'none')};
`
export const GiveMoodButton = styled.div`
  cursor: ${(props: { home: boolean }) => (props.home ? 'pointer' : 'default')};
  background-color: #c4c4c4;
  border-radius: 13px 0% 0% 13px;
  width: 50px;
  height: 94.7%;
  padding: 5px;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
  color: ${(props: { home: boolean }) => (props.home ? '#1a2296' : 'black')};
`
export const PostAndMoodWrapper = styled.div`
  border-bottom: solid black 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const PostAuthor = styled.div`
  border-left: solid black 2px;
  width: 50%;
`
export const MoodDisplay = styled.div`
  width: 50%;
`
export const ContentWrapper = styled.div`
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
  width: 80%;
  height: 100%;
  overflow: hidden;
  line-height: 30px;
  border: solid 2px black;
  border-top: none;
  border-bottom: none;
`
export const NewPostContent = styled.div`
  height: 83%;
  width: 100%;
  border: solid 1px black;
  line-height: 60px;
  display: inline-block;
  vertical-align: middle;
`
export const PostNumber = styled.div`
  border-radius: 0% 13px 13px 0%;
  background-color: #c4c4c4;
  width: 50px;
  height: 94.5%;
  font-size: 2em;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`
