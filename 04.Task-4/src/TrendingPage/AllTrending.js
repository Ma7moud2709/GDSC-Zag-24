import React from 'react'
import { CartProvider } from "react-use-cart";
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader';
import Product from './Product';
import Categories from '../HomePage/Categories';
import Footer from '../HomePage/Footer';

function AllTrending() {
    return (
        <CartProvider>
            <Header />
            <PageHeader />
            <Product />
            <Categories />
            <Footer />
        </CartProvider>
    )
}

export default AllTrending;
