import React, { useState } from 'react';
import { userSignupDataFromFrontendToBackend } from '../server/backendServer';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onclickHandler = async () => {
    const res = await userSignupDataFromFrontendToBackend(fullName, email, phoneNum, password);
    if (res?.success) {
      window.location.href = '/login';
    }
  };

  return (
    <div className="container mt-5" style={{ width: '300px' }}>
      <h4>Sign Up</h4>
      <div className="mb-3">
        <label>Full Name</label>
        <input type="text" className="form-control" onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Phone No</label>
        <input type="tel" className="form-control" onChange={(e) => setPhoneNum(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={onclickHandler}>Submit</button>
    </div>
  );
}

export default Signup;
