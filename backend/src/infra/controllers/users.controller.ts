import { Controller, Get, Query } from '@nestjs/common';

import { UserEntity } from '../../domain/entities/user.entity';
import { FindManyUsersUseCase } from '../../domain/use-cases/find-many-user.use-case';

@Controller('users')
export class UsersController {
  constructor(private readonly findUsersUseCase: FindManyUsersUseCase) {}

  @Get()
  async getUsers(
    @Query('results') results: string,
    @Query('newSeed') newSeed: string,
    @Query('gender') gender: string,
  ): Promise<UserEntity[]> {
    return this.findUsersUseCase.execute(results, newSeed, gender);
  }
}
