import { Module } from '@nestjs/common';

import { ControllersModule } from './infra/controllers/controllers.module';
import { UserRepositoryImpl } from './infra/repositories/user.repository';
import { FindManyUsersUseCase } from './domain/use-cases/find-many-user.use-case';

@Module({
  imports: [ControllersModule],
  providers: [FindManyUsersUseCase, UserRepositoryImpl],
})
export class AppModule {}
