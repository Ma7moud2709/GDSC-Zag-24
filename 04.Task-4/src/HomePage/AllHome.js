import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Features from './Features';
import Trending from './Trending';
import MostPlayed from './MostPlayed';
import Categories from './Categories';
import Cta from './Cta';
import Footer from './Footer.js';
import { CartProvider} from "react-use-cart";

function AllHome() {
  return (
    <CartProvider>
      <Header />
      <Banner />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories/>
      <Cta/>
      <Footer/>
    </CartProvider>
  )
}

export default AllHome;
