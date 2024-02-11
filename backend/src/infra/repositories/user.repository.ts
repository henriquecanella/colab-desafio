import axios from 'axios';

import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UserRepositoryImpl implements UserRepository {
  async findMany(
    results: number,
    newSeed?: boolean,
    gender?: string,
  ): Promise<UserEntity[]> {
    let seedToUse: string | undefined = process.env.DEFAULT_SEED;

    if (newSeed === true) {
      seedToUse = (Math.random() + 1).toString(36).substring(7);
    }

    try {
      const response = await axios.get('https://randomuser.me/api', {
        params: {
          seed: seedToUse,
          gender: gender,
          results: results,
        },
      });

      const usersData = response.data.results;
      console.log(usersData);

      const users: UserEntity[] = usersData.map((userData: any) => ({
        email: userData.email,
        cell: userData.cell,
        location: {
          city: userData.location.city,
          country: userData.location.country,
        },
      }));

      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // You may want to handle this error more gracefully in a real application
    }
  }
}
