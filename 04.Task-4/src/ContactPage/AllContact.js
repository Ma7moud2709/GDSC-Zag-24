import React from 'react'
import { CartProvider,} from "react-use-cart";
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader.js';
import ContactPage from './ContactPage.js';
import Footer from '../HomePage/Footer.js';
function AllContact() {
  return (
    <CartProvider>
      <Header />
      <PageHeader />
      <ContactPage />
      <Footer />
    </CartProvider>
  )
}

export default AllContact;
