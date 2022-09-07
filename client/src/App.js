import React from 'react';
import {Landing} from './pages'
import { Error } from './pages';
import {Dashboard} from './pages';
import {Register} from './pages';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <nav>
         <Link to='/'>Dashboard</Link>
         <Link to='/register'>Register</Link>
         <Link to='/landing'>Landing Page</Link>
      </nav>
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
