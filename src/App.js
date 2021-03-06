

import React from 'react';
import {Home}  from  './pages/home/Home';
import {Login}  from  './pages/login/Login';
import {Signup}  from  './pages/signup/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';


function App() {

  
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
