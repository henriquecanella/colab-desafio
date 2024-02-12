import axios from 'axios';

import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UserRepositoryImpl implements UserRepository {
  private usersData: UserEntity[];

  async findMany(
    results: string,
    newSeed?: string,
    gender?: string,
  ): Promise<UserEntity[]> {
    let seedToUse: string | undefined = process.env.DEFAULT_SEED;
    const defaultResultNumber: string = results || '10';

    if (newSeed === '1') {
      seedToUse = (Math.random() + 1).toString(36).substring(7);
    }
    try {
      const response = await axios.get('https://randomuser.me/api', {
        params: {
          seed: seedToUse,
          gender: gender,
          results: defaultResultNumber,
        },
      });
      this.usersData = response.data.results;

      const users: UserEntity[] = this.usersData.map((userData: any) => ({
        name: userData.name,
        email: userData.email,
        cell: userData.cell,
        picture: {
          thumbnail: userData.picture.thumbnail,
        },
      }));

      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // You may want to handle this error more gracefully in a real application
    }
  }
}
