import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Allblogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:4000/blog/allblog');
      console.log(res.data); // Log the response to check its structure
      setBlogs(res.data);
    })();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{blog.description}</td>
              <td>{blog.author}</td>
              <td>
                <Link
                  to={`/blog/${blog._id}`}
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Allblogs;
