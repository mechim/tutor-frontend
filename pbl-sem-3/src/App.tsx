import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css'
import { Catalog } from './pages/Catalog/Catalog';
import { ForgotPassword } from './pages/ForgotPassword/ForgotPassword';
import Landing from './pages/Landing/Landing'
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';


function App() {

  return (
    <Router>


      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path ='/register' element={<Register />} />
        <Route path ='/forgot' element={<ForgotPassword/>}/>
      </Routes>
    </Router> 
  )
}

export default App
