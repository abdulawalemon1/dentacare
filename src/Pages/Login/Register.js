import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const emailRef = useRef('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending1, error1] = useSendEmailVerification(auth);

    const navigateLogin = event => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }
    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    const SendEmailVerification = async () => {
        // const email = event.target.email.value;
        const email = emailRef.current.value;


        if (error1 || error) {
            return (
                <div>
                    <p>Error: {error1?.message}{error?.message}</p>
                </div>
            );
        }
        if (sending1) {
            return <p>Sending...</p>;
        }
        if (email) {
            console.log(email)
            await sendEmailVerification();
            toast('Please check your email inbox');
        }
    }



    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary'>Sign Up</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <div className='text-end'>

                        <Button onClick={SendEmailVerification}>Verify Email</Button>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='mt-2 text-center'>Already have an account? <Link to={"/login"} className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div >
    );
};

export default Register;