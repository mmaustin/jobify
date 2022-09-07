import React from 'react';
import {Landing} from './pages'
import { Error } from './pages';
import {Dashboard} from './pages';
import {Register} from './pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
