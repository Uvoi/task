import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const UsersGet = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (user) => {
    navigate(`/user/${user.id}`, {
      state: { 
        userName: user.name, 
        email: user.email, 
        phone: user.phone,
        userInfo: `${user.name} lives in ${user.address.city}, ${user.address.street}, ${user.address.suite}.`
      }
    });
  };

  return (
    <div className='UsersGet'>
      <div className="users">
        {users.map(user => (
          <div key={user.id}>
            <button id={`user${user.id}`} onClick={() => handleUserClick(user)}>{user.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersGet;
