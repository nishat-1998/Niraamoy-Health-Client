import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './CheckOut.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';


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
            <Container>
                <h3 className="section-heading bg-dark text-center text-white"><span><FontAwesomeIcon icon={faShoppingBag} /></span> CheckOut</h3>
                <div className="table">
                    <Table responsive>
                        <thead>
                            <tr>
    
                                <th>Description</th> 
                                <th>Group</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {checkOut && (<tbody>
                            <tr>
                              
                                <td style={{fontSize:'23px', fontWeight: '600'}}>{checkOut.name}</td>
                                <td style={{color:'green'}}>{checkOut.group}</td>
                                <td style={{color:'red'}}>{checkOut.quantity}</td>
                                <td style={{color:'red'}}>{checkOut.seeling}</td>
                            </tr>
                        </tbody>)}
                    </Table>
                    <button onClick={() => handleCheckOut()} className="order-btn" type="submit">Place Order</button>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;