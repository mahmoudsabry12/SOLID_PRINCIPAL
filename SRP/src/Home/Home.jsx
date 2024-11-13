import React, { useState } from 'react'
import { UserProfile } from '../Components/UserProfile'
import { UpdateUserForm } from '../Components/UpdateUserForm'

export const Home = () => {

    const [user,setUser]= useState({name:"mahmoud",email:"mahmoud@gmail.com"})

    const handleUpdateUser = (UpdatedUser)=>{[
        setUser(UpdatedUser)
    ]}

  return (
    <div>
        <UserProfile user={user}/>
        <UpdateUserForm  user={user} onUpdate={handleUpdateUser} />
    </div>
  )
}
