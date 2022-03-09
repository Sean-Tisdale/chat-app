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
  border-radius: 35px;
  display: flex;
  display: ${(props: { display: any }) => (props.display ? '' : 'none')};
`
export const GiveMoodButton = styled.div`
  cursor: pointer;
  background-color: #c4c4c4;
  border: black solid 3px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 5px;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
  color: #1a2296;
`
export const NewPost = styled.div`
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
  width: 80%;
  height: 100%;
  overflow: hidden;
  line-height: 30px;
  margin-top: 10px;
`
export const PostNumber = styled.div`
  border: black solid 3px;
  border-radius: 50%;
  background-color: #c4c4c4;
  width: 50px;
  height: 50px;
  font-size: 2em;
  padding: 5px;
  text-align: center;
  font-weight: bold;
`
