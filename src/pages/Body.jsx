import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import HotelMenu from '../components/Menu/HotelMenu';
import About from '../components/About';

const Body = () => {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Render the Header component outside of Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hotel' element={<HotelMenu />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Body;
