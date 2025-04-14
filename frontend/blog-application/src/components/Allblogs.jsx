import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Allblogs() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/allblog');
        setBlog(response.data);
        console.log(response.data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    })();
  }, []); 

  return (
    <>
      <h1>All Todos</h1>
      <ul>
        {setBlog.map((todo) => (
          <li key={todo.id}>
           data
          </li>
        ))}
      </ul>
    </>
  );
}

export default Allblogs;