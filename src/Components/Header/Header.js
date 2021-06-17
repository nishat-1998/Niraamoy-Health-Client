import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Images/Niraamoy.png';

const Header = () => {

    return (
        <div>
             <Navbar bg="light" expand="lg" >
            <Container>
                <img className="m-2" style={{width: '80px'}} src={logo} alt=""/>
                <Navbar.Brand  as={Link} to="/" style={{fontWeight: '600', fontSize: '30px'}}> Niraamoy Health</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} className="text-primary" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-primary" to="/orders">Orders</Nav.Link>
                        <Nav.Link as={Link} className="text-primary" to="/admin">Admin</Nav.Link>
                            <Button variant="danger"  as={Link} to="/Login">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;