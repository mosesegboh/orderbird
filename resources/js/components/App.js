import React, {useEffect,useState, useRef} from 'react';
import User from './User';
import Layout from './Layout';
import {getUsers} from '../services';

function App() {
  const unsubscribe = useRef();
  const [users, setUsers] = useState(null);

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
    <Layout>
      <User
        users={users}
        setUsers={setUsers}
      />
    </Layout>
  );
}

export default App;