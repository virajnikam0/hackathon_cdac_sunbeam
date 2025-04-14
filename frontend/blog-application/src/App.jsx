import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Addblog from './components/Addblog';
import Allblogs from './components/Allblogs';
import NavbarLayout from './components/NavbarLayout';

function App() {
  return (
    <>
     <Routes>
     <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<NavbarLayout />}>
        <Route path="/all-blog" element={<Allblogs />} />
        {/* <Route path="/my-blogs" element={<MyBlogs />} /> */}
        <Route path="/add-blog" element={<Addblog />} />
        {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
        {/* <Route path="/edit-blog/:id" element={<EditBlog />} /> */}
        {/* <Route path="/search" element={<SearchBlog />} /> */}
      </Route>

     </Routes>
    </>
  );
}

export default App;