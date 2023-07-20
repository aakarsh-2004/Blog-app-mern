import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landing-Page/LandingPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/blogs' element={<Blog />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/create' element={<Create />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
