import React, { useState, useEffect } from 'react';
//import UserList from '../components/UserList';
import { getUsers } from '../services/api';
//import { User } from '../types';

function Home(): JSX.Element {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await getUsers();
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User List</h1>
    </div>
  );
}

export default Home;
