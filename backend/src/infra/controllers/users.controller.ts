import { Controller, Get, Query, Param } from '@nestjs/common';

import { UserEntity } from '../../domain/entities/user.entity';
import { FindManyUsersUseCase } from '../../domain/use-cases/find-many-user.use-case';
import { FindSingleUserUseCase } from '../../domain/use-cases/find-single-user.use-case';

@Controller('users')
export class UsersController {
  constructor(
    private readonly findUsersUseCase: FindManyUsersUseCase,
    private readonly findSingleUserUseCase: FindSingleUserUseCase,
  ) {}

  @Get()
  async getUsers(
    @Query('results') results: string,
    @Query('newSeed') newSeed: string,
    @Query('gender') gender: string,
  ): Promise<UserEntity[]> {
    return this.findUsersUseCase.execute(results, newSeed, gender);
  }

  @Get('detail/:email')
  async getUser(@Param('email') email: string): Promise<UserEntity> {
    return this.findSingleUserUseCase.execute(email);
  }
}
