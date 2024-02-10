import { UserEntity } from '../entities/UserEntities';

export abstract class UserRepository {
  abstract findMany(
    newSeed?: boolean,
    gender?: string,
    results: number,
  ): Promise<UserEntity[]>;
}
