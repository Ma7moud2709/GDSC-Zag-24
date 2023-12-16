import React from 'react'
import { CartProvider } from "react-use-cart";
import Header from '../HomePage/Header';
import Signup from './Signup';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer';

function SignUpPage() {
  return (
    <CartProvider>
      <Header />
      <PageHeader />
      <Signup />
      <Footer />
    </CartProvider>
  )
}

export default SignUpPage;