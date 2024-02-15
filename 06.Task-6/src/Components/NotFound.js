import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='error'>
            <h1>404 Not Found</h1>
            <p>Go To <Link to='/'>Home Page</Link></p>
        </div>
    )
}

export default NotFound