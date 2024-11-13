import React, { useState } from 'react'



// Consider Function 

export const UpdateUserForm = ({user,onUpdate}) => {

    const [name,setName]= useState('')
    const [email,setEmail]= useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        onUpdate({...user,name,email})
        console.log(name)
    }

  return (

    <div>
    <form onSubmit={handleSubmit}>
    <h2>Update User</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Update</button>

    </form>

    </div>
  )
}
