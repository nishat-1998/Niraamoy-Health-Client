import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    
    return (
        <div className='col-md-4'>
            <div className="box-style" style={{margin: '20px', padding: '20px'}}>
                <img style={{width: '250px', height: '250px'}} src={product.img} alt=""/>
                <h4>{product.name}- {product.group}</h4>
                <div className='d-flex justify-content-between'>
                    <h4 className="text-success">{product.selling}</h4>
                    <Button variant="success" as={Link} to={`/checkOut/${product._id}`}>Buy Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Product;