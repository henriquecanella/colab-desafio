import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../services/api';
import { User } from '../types';

function UserDetail(): JSX.Element {
  const { email } = useParams<{ email: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = async (): Promise<void> => {
    try {
      const response = await getUserDetail(email);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user detail:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User Detail</h1>
      {user ? (
        <div className="border p-4 rounded-md">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Cell:</strong> {user.cell}</p>
          <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
          {/* Display additional user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetail;
