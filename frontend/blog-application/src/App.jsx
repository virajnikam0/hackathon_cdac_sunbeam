import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Addblog from './components/Addblog'
import Allblogs from './components/Allblogs'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Routes>
      <Route path='/user/login' element={<Login />}></Route>
      <Route path='/user/signup' element={<Signup />}></Route>
      <Route path='/user/add-blog' element={<Addblog />}></Route>
      <Route path='/user/all-blog' element={<Allblogs />}></Route>
    </Routes>

      {/* <Login  /> */}
      {/* <Signup /> */}
      {/* <Addblog /> */}
      {/* <Deleteblog /> */}
      {/* <Allblogs /> */}




   </>
  )
}

export default App
