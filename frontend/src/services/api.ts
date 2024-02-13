import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000';

export const getUsers = async (results, newSeed, gender) => {
  return axios.get(`${API_BASE_URL}/users`);
};
