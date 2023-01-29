import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Login from './components/Login';
import Reagistration from './components/Registration';

let App = () => {
  return(
    <React.Fragment>
      {/* <NavBar/> */}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element = {<Reagistration/>}/>
        <Route path= '/calculator' element = {<Calculator/>} />
      </Routes>
    </React.Fragment>
  )
};

export default App;
