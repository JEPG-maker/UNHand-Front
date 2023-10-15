import React from 'react';
import '../../App.css';
import NavbarMain from '../NavBars/NavbarMain';
import SeccionMain from '../sections/SeccionMain';
import Cards from '../Cards/Cards.js';
import Footer from '../Footer/Footer.js'


function Home() {
  return (
    <>
      <NavbarMain/>
      <SeccionMain/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;