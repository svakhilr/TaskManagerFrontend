import React, { Component } from 'react';
import UserRoutes from './Routes/user';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const  App  = ()=> {
   
    return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<UserRoutes/>} />
        </Routes>
      </BrowserRouter>
    );
  
}

export default App;
