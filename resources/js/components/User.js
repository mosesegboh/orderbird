import React, {useRef, useEffect, useState} from 'react';
import {getUsers} from '../services';

function User() {
  const unsubscribe = useRef();
  const [users,setUsers] = useState(null);

  useEffect(()=>{
    async function fetchUsers(){
      const result = await getUsers()
      if (unsubscribe) {
        setUsers(result)
      }
    }
    fetchUsers()
    return () => {
      unsubscribe.current = false;
    };
  },[]);

  return (
    <table className="hover:table-fixed">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((item, index) => (
          <tr className="text-center" key={index}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default User;

