import React, { useState, createContext, useEffect } from "react";


export const userContext = createContext();

function AuthContext(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
    }

    function logout() {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);

    }

    const user = {
        userName: "admin",
        password: "admin"
    }

    useEffect(() => {
        const checkLoggedIn = localStorage.getItem("isLoggedIn");
        console.log(checkLoggedIn)
        if (checkLoggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <userContext.Provider value={{ isLoggedIn, login, logout, user }}>
            {props.children}
        </userContext.Provider>
    );
};

export default AuthContext;