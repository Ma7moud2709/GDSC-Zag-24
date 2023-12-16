import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (username.trim() === '') {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            newErrors.email = 'Valid email is required';
            isValid = false;
        }

        if (password.trim() === '') {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        if (confirmPassword.trim() === '' || confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
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
            window.location.href = '/signin';
        }
    };
    return (
        <div classNameName='section'>
            <Container>
                <Row>
                    <div className='signup mt-5'>
                        <div className="wrapper bg-grey rounded-5">
                            <div className="inner-warpper text-center">
                                <div className="logo text-center mb-4">
                                    <Link to="/">
                                        <img src="/img/icon.png" alt="" style={{ maxWidth: "70px" }} className='animate__animated animate__fadeIn' />
                                    </Link>

                                </div>
                                <h2 className="title mb-4">Creat Account</h2>
                                <form action="" id="formvalidate" onSubmit={handleSubmit}>

                                    <div className="input-group">
                                        <input className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)} type="text" placeholder="User Name" />

                                        {errors.username && <div className="user-error-message rounded">{errors.username}</div>}

                                    </div>

                                    <div className="input-group">
                                        <input className="form-control"
                                            id="emai"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

                                        {errors.email && <div className="email-error-message rounded">{errors.email}</div>}

                                    </div>

                                    <div className="input-group">
                                        <input className="form-control" id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                        {errors.password && <div className="password-error-message rounded">{errors.password}</div>}

                                    </div>

                                    <div className="input-group">
                                        <input className="form-control" id="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                                        {errors.confirmPassword && <div className="con-password-error-message rounded">{errors.confirmPassword}</div>}

                                    </div>
                                    <button type="submit" id="login" className='rounded-4'>Creat Account</button>
                                </form>
                            </div>
                            <div className="signup-wrapper text-center">
                                <Link to="/signin">Have an account? <span className="text-primary">Login</span></Link>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div >
    )
}
export default Signup;
