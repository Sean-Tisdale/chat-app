import React, { useState } from 'react'
import {
  AddUserInputField,
  AdminPageWrapper,
  RemoveButton,
  AddButton,
  RemoveUserInputField,
} from './adminPage.styles'
import { useC } from '../../lib/hooks/useC'

const AdminPage = () => {
  const { addUser } = useC()
  const [addInput, setAddInput] = useState<string>()
  const [removeInput, setRemoveInput] = useState<string>()
  // interface HandleChangeProps {
  // id: string
  // e: any
  // }
  let add: boolean
  const handleAdd = (e: any) => {
    e.preventDefault()
    console.log('handleAdd, line 18')
  }
  const handleRemove = (e: any) => {
    e.preventDefault()
    console.log('handleRemove, line 22')
  }
  function handleChange(e: any) {
    // e.preventDefault()
    // add === true ? setAddInput(e.target.value) : setRemoveInput(e.target.value)
  }
  const handleKeyPress = (e: any) => {
    // if (e.code === 'Enter' && id === '1') {
    //   console.log('add')
    // } else if (e.code === 'Enter' && id !== '1') {
    //   console.log('remove')
    // }
  }

  return (
    <AdminPageWrapper>
      <AddButton onClick={handleAdd}>
        <div>ADD USER</div>
      </AddButton>
      <AddUserInputField
        placeholder="Add User"
        // id={add}
        value={addInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <RemoveButton onClick={handleRemove}>REMOVE USER</RemoveButton>
      <RemoveUserInputField
        placeholder="Remove User"
        value={removeInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <RemoveButton>REMOVE POST</RemoveButton>
    </AdminPageWrapper>
  )
}
export default AdminPage
