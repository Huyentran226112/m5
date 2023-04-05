
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './components/Employee';
import EmployeeDetail from './components/EmployeeDetail';
import Login from './components/Login';

function App(){
  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/Employee" element={< Employee/>} />
        <Route path="/EmployeeDetail/:id" element={< EmployeeDetail/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;