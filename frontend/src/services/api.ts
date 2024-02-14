import axios from 'axios';
import axios, { AxiosResponse } from 'axios';
import { User } from '../types';

const API_BASE_URL = 'http://localhost:3000';

export const getUsers = async (results: string, newSeed: string, gender: string): Promise<AxiosResponse<User[]>> => {
  return axios.get<User[]>(`${API_BASE_URL}/users`, {
    params: {
      results: results,
      newSeed: newSeed,
      gender: gender,
    },
  });
};

export const getUserDetail = async (email: string): Promise<AxiosResponse<User>> => {
  return axios.get<User>(`${API_BASE_URL}/users/detail/${email}`);
};
