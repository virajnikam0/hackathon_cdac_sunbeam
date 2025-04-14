import axios from "axios";

// user login

export async function userLoginDataFromFrontendToBackend(email,password){
    const body = {
        email : email,
        password : password
    }
    const res = await axios.post("http://localhost:4000/user/login",body);
    console.log(res.data);
}

// user signup
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

// add blog 
export async function userAddBlogFrontendToBackend(title,category,description) {
    const body = {
        title : title,
        category : category,
        description : description
    };
    const res = await axios.post("http://localhost:4000/blog/addblog",body);
    console.log(res.data);
}

// delete blog 
// TODO => remain

// update blog 
// TODO => remain



