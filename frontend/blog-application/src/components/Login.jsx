import React, { useState } from 'react';
import { userLoginDataFromFrontendToBackend } from '../server/backendServer';
import { Link, Links } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onclickHandler = async () => {
    const res = await userLoginDataFromFrontendToBackend(email, password);
    // if (res?.success) {
    //   localStorage.setItem('userId', res.userId);
    //   window.location.href = '/all-blog';
    // }
  };

  return (
    <div className="container mt-5" style={{ width: '300px' }}>
      <h4>Login</h4>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='mb-3'>
          <div className='mb-3'>
            Don't have an account yet? Register <Link to='/signup'>here</Link>
          </div>
          {/* <button
            onClick={onclickHandler}
            className='btn btn-success'
            <Link  className='nav-link' to='/my-blogs'>My Blogs</Link>
          >
            Login
          </button> */}
          <button onClick={onclickHandler} className="btn btn-success">
  <Link className="nav-link" to="/all-blog">
    login
  </Link>
</button>
        </div>
    </div>

  );
}

export default Login;
