import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    return (
        
        <div className="col-md-4">
            <div className="box-style" style={{margin: '20px', padding: '20px'}}>
            {
            product.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${product.image.img}`} alt=""/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5055/${product.img}`} alt=""/>
        }
                <h5>{product.name}</h5>
                <h6>{product.group}</h6>
                <h6>{product.company}</h6>
                <div className="cart-controller ml-3 btn">
                <h5 className="text-success">{product.selling}</h5>
               <button className="btn" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button> {quantity} <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                <div className='d-flex justify-content-between'>
                   
                    <Button variant="success" as={Link} to={`/checkOut/${product._id}`}>Buy Now</Button>
                </div>
            </div>
        </div>
       
    );
};

export default Product;