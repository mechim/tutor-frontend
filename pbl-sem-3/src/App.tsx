import { useLayoutEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css'
import { Catalog } from './pages/Catalog/Catalog';
import { ProfileTutor } from './pages/ProfileTutor/ProfileTutor';
import { ForgotPassword } from './pages/ForgotPassword/ForgotPassword';
import Landing from './pages/Landing/Landing'
import { Login } from './pages/Login/Login';
import { ProfileStudent } from './pages/ProfileStudent/ProfileStudent';
import { Register } from './pages/Register/Register';
import {Reset} from './pages/ResetPassword/ResetPassword'
import {RegisterSecond} from './pages/RegisterSecond/RegisterSecond'
import { EditProfileTutor } from './pages/EditProfileTutor/EditProfileTutor';


function App() {

  return (
    <Router>


      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path ='/register' element={<Register />} />
        <Route path ='/forgot' element={<ForgotPassword/>}/>
        <Route path ='/profileStudent' element={<ProfileStudent/>}/>
        <Route path ='/profileTutor' element={<ProfileTutor/>}/>
        <Route path ='/reset' element={<Reset/>}/>
        <Route path = '/editTutorProfile' element={<EditProfileTutor/>}/>
        <Route path='/registerSecond' element={<RegisterSecond/>}/>

      </Routes>
    </Router> 
  )
}

export default App
