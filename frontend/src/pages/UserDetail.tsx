import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserDetail } from '../services/api';
import { User } from '../types';

function UserDetail(): JSX.Element {
  const { email } = useParams<{ email: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = async (): Promise<void> => {
    try {
      const response = await getUserDetail(email);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user detail:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Detail</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : user ? (
        <div className="bg-white rounded-md p-6 shadow-md">
          <img src={user.picture.large} alt={user.name.first} className="w-32 h-32 rounded-full mx-auto mb-4" />
          <p className="text-gray-800 text-center text-xl font-bold mb-2">{user.name.title} {user.name.first} {user.name.last}</p>
          <p className="text-gray-600 text-center">Gender: {user.gender}</p>
          <p className="text-gray-600 text-center">Email: {user.email}</p>
          <p className="text-gray-600 text-center">Phone: {user.phone}</p>
          <p className="text-gray-600 text-center">Cell: {user.cell}</p>
          <p className="text-gray-600 text-center">Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
          <p className="text-gray-600 text-center">Age: {user.dob.age}</p>
          <p className="text-gray-600 text-center">Registered: {new Date(user.registered.date).toLocaleDateString()}</p>
          <p className="text-gray-600 text-center">Nationality: {user.nat}</p>
          <p className="text-gray-600 text-center">Location: {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country} - {user.location.postcode}</p>
          <div className="flex justify-center mt-4">
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">Go back to Home</Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">User not found.</p>
      )}
    </div>
  );
}

export default UserDetail;
