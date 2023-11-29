import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

import Footer from './components/Footer';
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import Panier from './components/Panier';
import Flower from './components/Flower';
import Contact from './components/Contact';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route    exact path="/" element={<Home/>}>
        <Route    exact path="/home" element={<Header/>} />
        <Route    exact path="/panier" element={<Panier />} />
        <Route    exact path="/contact" element={<Contact/>} />
        <Route     exact path="/flower" element={<Flower/>} />
        </Route>
      </Routes>
   
      {/* <Header /> */}
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;