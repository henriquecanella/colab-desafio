import { MockUserRepository } from '../../../test/mocks/mock-user-repository';
import { FindSingleUserUseCase } from './find-many-user.use-case';

describe('FindSingleUserUseCase', () => {
  it('should return a single user', async () => {
    const userRepository = new MockUserRepository();
    const findUsersUseCase = new FindManyUsersUseCase(userRepository);

    const users = await findUsersUseCase.execute(2);

    expect(users).toHaveLength(1);
    expect(users[0].email).toBe('klaus-d..binder@example.com');
  });
});
