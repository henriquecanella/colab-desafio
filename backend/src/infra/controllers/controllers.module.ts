import { Module } from '@nestjs/common';

import { UserRepository } from '../../domain/repositories/user.repository';
import { FindManyUsersUseCase } from '../../domain/use-cases/find-many-user.use-case';
import { UserRepositoryImpl } from '../repositories/user.repository';
import { UsersController } from './users.controller';

@Module({
  imports: [UserRepositoryImpl],
  controllers: [UsersController],
  providers: [
    FindManyUsersUseCase,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class ControllersModule {}
