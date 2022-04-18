import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="primary">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
                        <img style={{ height: '80px' }} src={logo} alt="" />
                        <h2>DentaCare</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link bg="primary" href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> : <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;