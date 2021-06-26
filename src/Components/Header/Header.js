import React from 'react';
//import './Header.css'
import { Button, Container, Nav, Navbar, FormControl,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Niraamoy.png';

const Header = () => {

   
    return (
        <div >
             <Navbar className="header " >
            <Container>
                <img className="m-2" style={{width: '80px'}} src={logo} alt=""/>
                <Navbar.Brand  as={Link} to="/" style={{fontWeight: '600', fontSize: '30px', color:'#EE2F26'}}> Niraamoy Health</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          
              </Form>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} className="text-primary" to="/home">Home</Nav.Link>
                            <Button variant="danger"  as={Link} to="/Login">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;