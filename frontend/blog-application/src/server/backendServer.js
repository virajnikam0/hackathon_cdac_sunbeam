import axios from "axios";

export async function userLoginDataFromFrontendToBackend(email,password){
    const body = {
        email : email,
        password : password
    }
    const res = await axios.post("http://localhost:4000/user/login",body);
    console.log(res.data);
}

export async function userSignupDataFromFrontendToBackend(fullname,email,phoneNum,password){
    const body = {
        email : email,
        password : password,
        fullName : fullname,
        phoneNum : phoneNum

    }
    const res = await axios.post("http://localhost:4000/user/signup",body);
    console.log(res.data);
}





