// import logo from './logo.svg';
import React from 'react';

import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barista from './components/Barista';
import CartPage from './components/CartPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/barista' element={<Barista/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
