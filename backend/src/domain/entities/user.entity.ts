import {
  Login,
  Name,
  Id,
  Dob,
  Location,
  Picture,
  Register
} from '../interfaces';

export class UserEntity {
  login: Login;
  email: string;
  phone: string;
  cell: string;
  name: Name;
  id: Id;
  gender: string;
  dob: Dob;
  location: Location;
  nat: string;
  picture: Picture;
  registered: Register;
}
