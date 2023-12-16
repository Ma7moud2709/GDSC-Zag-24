import React from 'react'
import { CartProvider } from "react-use-cart";
import Header from '../HomePage/Header';
import Signin from './Signin';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer';

function SignInPage() {
  return (
    <CartProvider>
      <Header />
      <PageHeader />
      <Signin />
      <Footer />
    </CartProvider>
  )
}

export default SignInPage;