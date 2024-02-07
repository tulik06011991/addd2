import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/main' element = {<Main/>}>Main</Route>
      <Route path='/Login' element = {<Login/>}>Main</Route>
      <Route path='/logout' element = {<Logout/>}>Main</Route>
      <Route path='/register' element = {<Register/>}>Main</Route>

    </Routes>
    </>

  )
}

export default App
