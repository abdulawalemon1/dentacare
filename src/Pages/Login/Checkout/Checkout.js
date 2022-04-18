import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Checkout = () => {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Form has been successfully submitted!');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary'>Checkout Information</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control type="text" name='name' placeholder="Your name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" required />


                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">

                    <Form.Control type="number" name='number' placeholder="Your Number" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">

                    <Form.Control type="text" name='address' placeholder="Your Address" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">

                    <Form.Control type='date' name='date' placeholder="Booking Date" />

                </Form.Group>



                <Button className='w-100 mb-4' variant="primary" type="submit">
                    Proceed to Payment
                </Button>
            </Form>

        </div >
    );
};

export default Checkout;