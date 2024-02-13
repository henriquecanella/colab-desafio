import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { getUsers } from '../services/api';
//import { User } from '../types';

function Home(): JSX.Element {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [numResults, setNumResults] = useState<number>(10); // Default number of results
  const [genderFilter, setGenderFilter] = useState<string>('all'); // Default gender filter

  // Called twice cause of strictMode
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await getUsers(numResults, 1, genderFilter);
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleGenerateNewResults = (): void => {
    fetchUsers();
  };

  const handleNumResultsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumResults(parseInt(e.target.value));
  };

  const handleGenderFilterChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setGenderFilter(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User List</h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="number"
          value={numResults}
          onChange={handleNumResultsChange}
          className="border p-2 rounded-md"
          min={1}
        />
        <select
          value={genderFilter}
          onChange={handleGenderFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button onClick={handleGenerateNewResults} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Generate New Results
        </button>
      </div>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}

export default Home;
