import { UserEntity } from '../../src/domain/entities/user.entity';
import { UserRepository } from '../../src/domain/repositories/user.repository';

export class MockUserRepository implements UserRepository {
  async findMany(
    _results: number,
    _newSeed?: boolean,
    _gender?: string,
  ): Promise<UserEntity[]> {
    return Promise.resolve([
      {
        gender: 'male',
        name: { title: 'Mr', first: 'Klaus-D.', last: 'Binder' },
        location: {
          street: { number: 9108, name: 'Im Winkel' },
          city: 'Güstrow',
          state: 'Bremen',
          country: 'Germany',
          postcode: 86232,
          coordinates: { latitude: '-52.4116', longitude: '-52.0616' },
          timezone: {
            offset: '-4:00',
            description: 'Atlantic Time (Canada), Caracas, La Paz',
          },
        },
        email: 'klaus-d..binder@example.com',
        login: {
          uuid: '904e654d-c2d5-430d-b378-1ee6008f5033',
          username: 'heavylion170',
          password: 'clapton',
          salt: 'Vi2uoa2S',
          md5: '77126aa45ff57ee2e3632fc155512f5e',
          sha1: '2b02520abe28622024fbef129f3863b0223b7709',
          sha256:
            '9d5d4582afbe37643f15b1edd4dfac8b8d271dde573be7c0a08848ca2002809d',
        },
        dob: { date: '1996-04-22T10:10:15.909Z', age: 27 },
        registered: { date: '2020-03-03T14:16:57.533Z', age: 3 },
        phone: '0005-9302177',
        cell: '0174-0777111',
        id: { name: 'SVNR', value: '58 220496 B 323' },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/42.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/42.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
        },
        nat: 'DE',
      },
    ]);
  }
}
