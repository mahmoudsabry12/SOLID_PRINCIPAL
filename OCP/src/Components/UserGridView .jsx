// UserGridView.js
import React from 'react';

const UserGridView = ({ users }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid black', padding: '10px' }}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserGridView;
