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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((user) => (
        <Link key={user.email} to={`/user/${user.email}`} className="block mb-4">
          <div key={user.email} className="border p-4 mb-4 rounded-md">
              <img className="shadow rounded-full max-w-full h-auto align-middle border-none" src={user.picture.thumbnail} />
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
