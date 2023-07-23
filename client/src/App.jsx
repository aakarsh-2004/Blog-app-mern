import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landing-Page/LandingPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import MainBlog from './components/Blog/MainBlog';
import Navbar from './components/Navbar/Navbar';
import YourBlog from './components/YourBlog/YourBlog';
import Update from './components/Update/Update';


function App() {
  return (
        <BrowserRouter>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path='/' element={<LandingPage />}/>
              <Route path='/blogs' element={<MainBlog />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/create' element={<Create />}/>
              <Route path='/post/:id' element={<YourBlog />}/>
              <Route path='/update/:id' element={<Update />}/>
            </Routes>
        </div>
        </BrowserRouter>
  );
};

export default App;
