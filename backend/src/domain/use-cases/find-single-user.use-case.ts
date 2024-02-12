import { Injectable } from '@nestjs/common';

import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class FindSingleUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string): Promise<UserEntity> {
    return this.userRepository.findOne(email);
  }
}
