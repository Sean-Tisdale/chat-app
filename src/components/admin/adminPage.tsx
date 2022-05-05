import React, { useState } from 'react'
import { InputField, AdminPageWrapper, Button } from './adminPage.styles'
import { useC } from '../../lib/hooks/useC'

const AdminPage = () => {
  const { addUser, checkUser, checkAdmin, addAdmin } = useC()
  const [addUserInput, setAddUserInput] = useState<string>()
  const [removeUserInput, setRemoveUserInput] = useState<string>()
  const [addAdminInput, setAddAdminInput] = useState<string>()

  const handleAddUser = async (e: any) => {
    e.preventDefault()
    setAddUserInput(e.target.value)
    console.log('handleAddUser, line 18')
    await addUser(addUserInput)
  }
  const handleRemoveUser = (e: any) => {
    e.preventDefault()
    setRemoveUserInput(e.target.value)
    console.log('handleRemoveUser, line 22')
  }
  const handleAddAdmin = async (e: any) => {
    e.preventDefault()
    setAddAdminInput(e.target.value)
    console.log('handleAddAdmin, line 18', await checkAdmin())
    await addAdmin(addAdminInput)
  }
  function handleChange(e: any) {
    e.preventDefault()
    if (e.target.id === 'user') {
      setAddUserInput(e.target.value)
    } else if (e.target.id === 'removeUser') {
      setRemoveUserInput(e.target.value)
    } else {
      setAddAdminInput(e.target.value)
    }
  }
  checkAdmin()
  return (
    <AdminPageWrapper>
      <Button onClick={handleAddUser}>
        <div>ADD USER</div>
      </Button>
      <InputField
        placeholder="Add User"
        id="user"
        value={addUserInput}
        onChange={handleChange}
      />
      <Button onClick={handleAddAdmin}>
        <div>ADD ADMIN</div>
      </Button>
      <InputField
        placeholder="Add Admin"
        id="admin"
        value={addAdminInput}
        onChange={handleChange}
      />
      <Button onClick={handleRemoveUser}>REMOVE USER</Button>
      <InputField
        placeholder="Remove User"
        id="removeUser"
        value={removeUserInput}
        onChange={handleChange}
      />
      <Button>REMOVE POST</Button>
    </AdminPageWrapper>
  )
}
export default AdminPage
