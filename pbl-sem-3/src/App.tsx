import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css'
import { Catalog } from './pages/Catalog/Catalog';
import Landing from './pages/Landing/Landing'


function App() {

  return (
    <Router>


      <Routes>
        <Route  path='/' element={<Landing />}/>
        <Route path='/catalog' element={<Catalog />}/>
      </Routes>
    </Router> 
  )
}

export default App
