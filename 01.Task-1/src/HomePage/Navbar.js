import React from 'react'
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';
function Navbar() {
    const {
        totalItems,
    } = useCart();
    return (
        <CartProvider>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
                {/* <!-- Container wrapper --> */}
                <div class="container">
                    {/* <!-- Toggle button --> */}
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                        <Link class="navbar-brand mt-2 mt-lg-0" to="/">
                            <img src="img/logo.svg" height="15" alt="MDB Logo" loading="lazy" />
                        </Link>
                        {/* <!-- Left links --> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Navbar brand --> */}
                        <ul class="navbar-nav ml-4 mb-2 mb-lg-0">
                            <li class="nav-item mr-2 ">
                                <Link class="nav-link" to="#">Collections</Link>
                            </li>
                            <li class="nav-item mr-2">
                                <Link class="nav-link" to="#">Men</Link>
                            </li>
                            <li class="nav-item mr-2">
                                <Link class="nav-link" to="#">Womens</Link>
                            </li>
                            <li class="nav-item mr-2">
                                <Link class="nav-link" to="#">About</Link>
                            </li>
                            <li class="nav-item mr-2">
                                <Link class="nav-link" to="#">Contact</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div class="d-flex justify-content-between">
                        {/* <!-- Icon --> */}
                        {/* <!-- Notifications --> */}
                        <div>
                            <Link to='/cart' className='text-dark' >
                                <div class="cart">
                                    <span class="count">0</span>
                                    <i class="fa-solid fa-cart-shopping"> {totalItems}</i>
                                </div>
                            </Link>

                        </div>

                        {/* <!-- Avatar --> */}
                        <div class="dropdown">
                            <Link class="dropdown-toggle d-flex align-items-center hidden-arrow" to="#"
                                id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="50"
                                    alt="Black and White Portrait of Link Man" loading="lazy" />
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <Link class="dropdown-item" to="#">My profile</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="#">Settings</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="#">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Right --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
        </CartProvider>
    )
}

export default Navbar;