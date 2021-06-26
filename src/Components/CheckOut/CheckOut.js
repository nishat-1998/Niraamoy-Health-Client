import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './CheckOut.css';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
//import Map from './Map';

const Checkout = () => {

    const {productId} = useParams();
    
    const [checkOut, setCheckOut] = useState({});
    const orderDate = moment();

    // const order = {...loggedInUser, ...oneProduct};


    useEffect(() => {
        fetch(`https://immense-depths-47841.herokuapp.com/${productId}`)
        .then(res => res.json())
        .then(data => setCheckOut(data[0]))
    }, [])

    const handleCheckOut = () => {
        const orderData = {
            name: checkOut.name,
            price: checkOut.price,
            quantity: checkOut.quantity,
            orderDate: orderDate
        }

            fetch('https://immense-depths-47841.herokuapp.com/productsByOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData) 
            })
            .then(res => console.log('Data stored successfully', res));
    }


    return (
<div>
    
</div>
    );
};

export default Checkout;