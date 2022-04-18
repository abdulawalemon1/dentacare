import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger text-center'> {error?.message}{error1?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });

    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email');
        } else {
            toast('Please enter your email!')
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-3 primaryColor'>Login</h2>

            <SocialLogin></SocialLogin>
            {errorElement}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger text-center'>{errors}</p>
                <Button className='w-100 d-block mx-auto button-30 text-center' variant="" type="submit">
                    Login
                </Button>

            </Form>
            <p className='text-center mt-2'>New to DentaCare? <Link to={"/register"} className='primaryColor text-decoration-none' onClick={navigateRegister}>Please Sign Up</Link></p>
            <p className='text-center mt-2'>Forget Password? <button to={"/register"} className='primaryColor bg-light text-decoration-none border-0' onClick={resetPassword}>Reset Password</button></p>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Login;