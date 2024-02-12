import { MockUserRepository } from '../../../test/mocks/mock-user-repository';
import { FindSingleUserUseCase } from './find-single-user.use-case';

describe('FindSingleUserUseCase', () => {
  it('should return a single user', async () => {
    const userRepository = new MockUserRepository();
    const findUserUseCase = new FindSingleUserUseCase(userRepository);

    const users = await findUserUseCase.execute('klaus-d..binder@example.com');
    expect(users.email).toBe('klaus-d..binder@example.com');
  });
});
