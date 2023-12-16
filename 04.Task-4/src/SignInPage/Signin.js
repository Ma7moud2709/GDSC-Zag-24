import { React, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';


function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (username.trim() === '') {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (password.trim() === '') {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    useEffect(() => {
        // Automatically clear error messages after 5 seconds
        const timer = setTimeout(() => {
            setErrors({});
        }, 5000);
        
        return () => {
            clearTimeout(timer);
        };
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            window.location.href = '/';
        }
    };
    return (
        <div classNameName='section'>
            <Container>
                <Row>
                    <div className='signin mt-5'>
                        <div className="wrapper bg-grey rounded-5">
                            <div className="inner-warpper text-center">
                                <div className="logo text-center mb-4 animate__animated animate__fadeIn">
                                    <Link to="/">
                                        <img src="/img/icon.png" alt="" style={{ maxWidth: "70px" }} />
                                    </Link>

                                </div>
                                <h2 className="title mb-4">Login to your account</h2>
                                <form action="" id="formvalidate" onSubmit={handleSubmit}>
                                    
                                    <div className="input-group">
                                        <input className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)} type="text" placeholder="User Name" />

                                        {errors.username && <div className="user-error-message rounded">{errors.username}</div>}

                                    </div>
                                    <div className="input-group">
                                        <input className="form-control" id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                        {errors.password && <div className="password-error-message rounded">{errors.password}</div>}

                                    </div>

                                    <button type="submit" id="login" className='rounded-4'>Login</button>
                                    <div className="clearfix supporter">
                                        <div className="pull-left remember-me">
                                            <input id="rememberMe" type="checkbox" />
                                            <label for="rememberMe">Remember Me</label>
                                        </div>
                                        <Link className="forgot pull-right " to="#">Forgot Password?</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-wrapper text-center">
                                <Link to="/signup">Don't have an accout? <span className="text-primary">Create One</span></Link>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div >
    )
}
export default Signin;
