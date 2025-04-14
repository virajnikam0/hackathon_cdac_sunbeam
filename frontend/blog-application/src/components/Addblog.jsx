import React, { useState } from 'react'
import { userAddBlogFrontendToBackend } from '../server/backendServer';

function Addblog() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const onclickHandler = () => {
        // call too backend
        const data = userAddBlogFrontendToBackend(title, category, description);

    }

    return (
        <>
            <h4>add blog</h4>
            {/* <div classNameName="container">
                <div classNameName="container mt-5" style={{ width: "300px" }}>
                    <div classNameName="mb-3">
                        <label for="exampleInputEmail1" classNameName="form-label">Title</label>
                        <input type="text" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div classNameName="mb-3 dropdown">
                        <label for="exampleInputPassword1" classNameName="form-label" >Category</label>
                        <ul classNameName="dropdown-menu" onChange={(e) => setCategory(e.target.value)}>
                            <li><p classNameName="dropdown-item">Tech</p></li>
                            <li><p classNameName="dropdown-item">Cricket</p></li>
                            <li><p classNameName="dropdown-item">Travel</p></li>
                        </ul>
                    </div>
                    <div className="form-floating">
                        <textarea classNameName="form-control" placeholder="Leave a Description here" id="floatingTextarea2" style="height: 100px" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <label for="floatingTextarea2">Description</label>
                    </div>
                    <button type="submit" classNameName="btn btn-primary" onClick={onclickHandler}>Submit</button>
                </div>
            </div> */}

            <div className="container mt-5 ">
                <div style={{ width: "500px" }}>
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Tech Making Progress"  onChange={(e) => setTitle(e.target.value)}/>
                </div>

                {/* adding category dropdown */}
                <select class="form-select mt-3" aria-label="Default select example" style={{ width: "500px" }}   onChange={(e) => setTitle(e.target.value)}>
                    <option selected>Category</option>
                    <option value="tech">Tech</option>
                    <option value="travel">Travel</option>
                    <option value="sports">Sports</option>
                </select>

                <div className="mb-3" style={{ width: "500px" }}>
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="give all details why tech making progress"   onChange={(e) => setTitle(e.target.value)}></textarea>
                </div>
                <button type="button" class="btn btn-primary" onClick={onclickHandler}>Add  Blog</button>

            </div>
        </>

    )
}

export default Addblog
