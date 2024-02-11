import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class FindManyUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    results: number,
    newSeed?: boolean,
    gender?: string,
  ): Promise<UserEntity[]> {
    console.log(results);
    console.log(newSeed);
    console.log(gender);
    return this.userRepository.findMany(results, newSeed, gender);
  }
}
