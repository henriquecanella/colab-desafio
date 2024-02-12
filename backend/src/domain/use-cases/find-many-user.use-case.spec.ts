import { MockUserRepository } from '../../../test/mocks/mock-user-repository';
import { FindManyUsersUseCase } from './find-many-user.use-case';

describe('FindManyUsersUseCase', () => {
  it('should return an array of users', async () => {
    const userRepository = new MockUserRepository();
    const findUsersUseCase = new FindManyUsersUseCase(userRepository);

    const users = await findUsersUseCase.execute('2');

    expect(users).toHaveLength(1);
    expect(users[0].email).toBe('klaus-d..binder@example.com');
  });
});
