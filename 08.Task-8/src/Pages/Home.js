import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { userContext } from '../Context/AuthContext';

function Home() {
    const { isLoggedIn, user, login } = useContext(userContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [login]);

    return (
        <div className='text-center' >
            {
                isLoggedIn ? (
                    <h1>Hello: {user.userName}</h1>
                ) : (<></>)
            }
        </div >
    )
}

export default Home