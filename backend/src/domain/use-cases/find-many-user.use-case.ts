import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class FindManyUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    newSeed: string,
    gender: string,
    results: number,
  ): Promise<UserEntity[]> {
    return this.userRepository.findMany(newSeed, gender, results);
  }
}
