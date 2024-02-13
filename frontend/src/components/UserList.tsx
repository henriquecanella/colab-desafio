import React from 'react';
import { Link } from 'react-router-dom';
//import { User } from '../types';

/*
interface Props {
  users: User[];
}
*/
function UserList({ users }): JSX.Element {
  return (
    <div>
      {users.map((user) => (
        <Link key={user.email} to={`/user/${user.email}`} className="block mb-4">
          <div key={user.email} className="border p-4 mb-4 rounded-md">
              <img src={user.picture.thumbnail} />
              <div>
                <p><strong>Name:</strong> {user.name.title}, {user.name.first} {user.name.last}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Cell:</strong> {user.cell}</p>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UserList;
