import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';

function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <AlbumList userId={user.id} />
        </div>
      ))}
    </div>
  );
}

export default UserList;
