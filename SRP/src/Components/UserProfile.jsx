import React from 'react'



// Consider View 
export const UserProfile = ({user}) => {
  return (
    <div>
          <h2>User Profile</h2>
    <h3>User Name : {user.name}</h3>
    <h3>User Eamil : {user.email}</h3>

    </div>
  )
}
