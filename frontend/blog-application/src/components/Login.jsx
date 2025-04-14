import React, { useState } from 'react'
import { userLoginDataFromFrontendToBackend } from '../server/backendServer';

function Login() {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const onclickHandler =() =>{
        const data = userLoginDataFromFrontendToBackend(email,password);
    }


    return (
        <>
        <h4>login</h4>
        
            <div className=" mt-5" style={{width:"300px"}}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) =>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label" >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) =>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onclickHandler}>Submit</button>
            </div>

        </>
    )
}

export default Login
