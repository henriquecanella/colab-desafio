import { UserEntity } from './user.entity';

describe('UserEntity Unit Tests', () => {
  it('should create an user entity instance', () => {
    const user = new UserEntity();
    expect(user).toBeInstanceOf(UserEntity);
  });
});
