import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Project from './Project';
import Login from './Login';
import Proute from '../Pages/Proute';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={
          <Proute>
            <Product />
          </Proute>
        } />
        <Route path='/project/:id' element={<Project />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
