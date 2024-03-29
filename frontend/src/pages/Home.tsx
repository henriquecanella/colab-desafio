import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { getUsers } from '../services/api';
import { User } from '../types';

function Home(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [numResults, setNumResults] = useState<number>(10);
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [newSeed, setNewSeed] = useState<number>(0);

  // Called twice cause of strictMode
  useEffect(() => {
    fetchUsers();
  }, [newSeed]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await getUsers(numResults, newSeed, genderFilter);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleGenerateNewResults = (): void => {
    setNewSeed(1);
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
