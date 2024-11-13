import React, { useState } from 'react'

import UserDisplay from '../Components/UserDisplay'





export const Home = () => {

    const [view,setView]= useState('list')

    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
      { id: 4, name: 'Bob Johnson' },
      { id: 5, name: 'Bob Johnson' },
      { id: 6, name: 'Bob Johnson' },
      { id: 7, name: 'Bob Johnson' },
    ];

  return (
    <div>

      <h3>عذرا لقبح المنظر ولكن الغرض التعلم</h3>

        <div style={{marginBottom:"3rem"}}>
        <button onClick={()=> setView('list' )}> List Mode </button>
        <button onClick={()=> setView('grid') }> Grid Mode </button>
        </div>

        <UserDisplay  users={users} viewMode={view} />

    </div>
  )
}
