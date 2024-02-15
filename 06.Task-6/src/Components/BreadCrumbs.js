import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function BreadCrumbs() {
    const location = useLocation();

    let currentLink = [];

    const crumbs = location.pathname.split('/')
        .filter(crumbs => crumbs !== '')
        .map(
            crumbs => {
                currentLink.push(`/${crumbs}`)

                return (
                    <div className='crumb' key={crumbs}>
                        <NavLink to={currentLink.join('')}>{crumbs}</NavLink>
                    </div>
                )
            })


    return (
        <div className='breadCrumbs'>
            {crumbs}
        </div>
    )
}

export default BreadCrumbs