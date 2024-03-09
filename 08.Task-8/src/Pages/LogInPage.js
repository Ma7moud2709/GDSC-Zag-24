import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userContext } from "../Context/AuthContext";
function LogInPage() {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { isLoggedIn, login, user } = useContext(userContext);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if (userName == "" && password == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please, Enter Data",
            });
        }
        else if (userName != user.userName) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User Name doesn't exist.",
            });
        } else if (password != user.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong password.",
            });
        }
        else {
            login();
        }

    };
    
    useEffect(() => {
        console.log(isLoggedIn)
        if (isLoggedIn) {
            navigate("/");
        }
    }, [login]);
    return (
        <div>
            {
                isLoggedIn ? (<></>) : (


                    <div className='mx-auto col-md-6'>
                        <form className='' onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => { setuserName(e.target.value) }}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className='form-group'>

                                <input
                                    type="checkbox"
                                    id='showPassword'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='mr-2'
                                />
                                <label htmlFor="showPassword">Show Password</label>

                            </div>

                            <button type="submit" className="btn btn-primary d-block m-auto w-50">Submit</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default LogInPage;