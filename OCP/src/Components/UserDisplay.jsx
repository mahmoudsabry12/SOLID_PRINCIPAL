import React from 'react'
import UserListView from './UserListView'
import UserGridView from './UserGridView '

const UserDisplay = ({viewMode,users}) => {
  return (
    <div>
         {viewMode === 'list' && <UserListView users={users} />}
         {viewMode === 'grid' && <UserGridView users={users} />}
    </div>
  )
}

export default UserDisplay