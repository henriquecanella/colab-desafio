import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class FindManyUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    results: number,
    newSeed?: boolean,
    gender?: string,
  ): Promise<UserEntity[]> {
    return this.userRepository.findMany(results, newSeed, gender);
  }
}
