import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const location = useLocation();
    let from = location.state?.from?.pathname || "/checkout";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'> Error:{error?.message}</p>
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
        await sendPasswordResetEmail(email)
        alert('Sent email');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Login</h2>

            <SocialLogin></SocialLogin>
            {errorElement}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 d-block mx-auto' variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-2'>New to DentaCare? <Link to={"/register"} className='text-primary text-decoration-none' onClick={navigateRegister}>Please Sign Up</Link></p>
            <p className='text-center mt-2'>Forget Password? <Link to={"/register"} className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
        </div>
    );
};

export default Login;