/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
                <div className="container">
                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink className="navbar-brand mt-2 mt-lg-0" href="/">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </NavLink>
                        <ul className="navbar-nav  mb-2 mb-lg-0 ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )

}
export default Navbar;
