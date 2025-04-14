import React, { useState } from 'react'
import { userSignupDataFromFrontendToBackend } from '../server/backendServer';

function Signup() {

    const[fullName,setFullName] = useState("");
    const[phoneNum,setPhoneNum]= useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const onclickHandler =() =>{
        const data = userSignupDataFromFrontendToBackend(fullName,email,phoneNum,password);
    }


  return (
    <>
        <h4>sign up</h4>
        <div className="container mt-5" style={{width:"300px"}}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>setFullName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputPassword1"  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Phone no</label>
                <input type="tel" className="form-control" id="exampleInputEmail1"  onChange={(e)=>setPhoneNum(e.target.value)}/>
            </div>

{/* TODO => confirm password */}

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onclickHandler}>Submit</button>
            </div>
      
    </>
  )
}

export default Signup
