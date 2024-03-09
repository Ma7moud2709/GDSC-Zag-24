import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../Context/AuthContext';

function Navbar() {
    const { isLoggedIn, logout } = useContext(userContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
                <div className="container">
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
                            {
                                isLoggedIn ?
                                    (
                                        <li className="nav-item">
                                            <NavLink className=" btn btn-danger nav-link text-white " onClick={() => logout()}>LogOut</NavLink>
                                        </li>
                                    ) : (
                                        <li className="nav-item">
                                            <NavLink className=" btn btn-success nav-link text-white " to="/login">LogIn</NavLink>
                                        </li>
                                    )

                            }


                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )

}
export default Navbar;
