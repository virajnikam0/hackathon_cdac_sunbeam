import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Routes>
      <Route path='/user/login' element={<Login />}></Route>
      <Route path='/user/signup' element={<Signup />}></Route>
    </Routes>

      {/* <Login  /> */}
      {/* <Signup /> */}



   </>
  )
}

export default App
