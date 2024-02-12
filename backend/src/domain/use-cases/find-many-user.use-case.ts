import { Injectable } from '@nestjs/common';

import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class FindManyUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    results: string,
    newSeed?: string,
    gender?: string,
  ): Promise<UserEntity[]> {
    return this.userRepository.findMany(results, newSeed, gender);
  }
}
