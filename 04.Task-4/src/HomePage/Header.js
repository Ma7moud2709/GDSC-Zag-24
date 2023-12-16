/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

function Header() {

    const {
        totalItems
    } = useCart();

    return (
        <CartProvider>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div class="row">
                        <div class="col-12">
                            <nav className="main-nav"  >
                                {/* <!-- ***** Logo Start ***** --> */}
                                <NavLink to="/" className="logo">
                                    <img src="/img/logo.png" alt="" style={{ width: "158px" }} />
                                </NavLink>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li><NavLink to="/" >Home</NavLink></li>
                                    <li><NavLink to="/shop">Our Shop</NavLink></li>
                                    <li><NavLink to="/trending">Trending</NavLink></li>
                                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    <li className='cart-sh'>
                                        <NavLink to="/cart">
                                            <div class="cart">
                                                <span class="count">{totalItems}</span>
                                                {/* <!--   <span class="count">1</span> --> */}
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </div>
                                        </NavLink></li>
                                    <li><NavLink to="/signin" id="form-open">Sign In</NavLink></li>

                                </ul>
                                <Link className='menu-trigger'>
                                    <span>Menu</span>
                                </Link>

                                {/* <!-- ***** Menu End ***** --> */}


                                {/* Log In */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header >
            {/* <!-- ***** Header Area End ***** --> */}

        </CartProvider >
    )
}

export default Header;