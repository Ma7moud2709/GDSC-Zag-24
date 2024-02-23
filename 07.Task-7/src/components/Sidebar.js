import React from 'react'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    return (
        <div className='sidebar shadow-5'>
            <ul className='list-unstyled pt-3'>
                <li>
                    <NavLink to="products">All Products</NavLink>
                </li>
                <li>
                    <NavLink to="categories">Categories</NavLink>
                </li>


            </ul>
        </div>
    )
}

export default Sidebar