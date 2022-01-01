import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Login from './pages/Login'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  let nav = useNavigate()
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      nav("/login")
    })
  }
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {
          !isAuth ? <Link to="/login">Login</Link>
            :
            <>
              <Link to="/createpost">Create a post</Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </div>
  )
}

export default App
