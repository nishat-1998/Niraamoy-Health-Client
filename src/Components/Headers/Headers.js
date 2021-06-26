import React from 'react';
import {Link} from 'react-router-dom';
import './Headers.css';
import Logo from '../../Images/Logo 1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
//import { useAuth } from '../SignUp/useAuth';
const Headers = () => {
   // const auth = useAuth();

    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Hot Onion Logo"/>
                </Link>
               
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link to="/checkout" className="nav-link"><FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} /><span className="badge bg-light"></span></Link>
                    </li>
                    <li className="nav-item">
                   
                             <Link to="/checkout" className="nav-link"></Link> 
                             
                             <Link to="/login" className="nav-link">Login</Link> 
                        
                    </li>
                    <li className="nav-item">
                      
                            <Link to="/" className="nav-link">
                               
                            </Link>
                            
                            <Link to="/login" className="nav-link">
                                <button className="btn btn-danger btn-rounded">Sign Up</button>
                            </Link>
                        
                       
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Headers;