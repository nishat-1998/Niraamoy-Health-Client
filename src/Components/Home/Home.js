import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import Product from "../Product/Product";
import Sidebar from "../SharedComponent/Sidebar/SideBar";

const Home = () => {
  const [products, setProducts] = useState([]);

  
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height:"100%"
}
  useEffect(() => {
    fetch("http://localhost:5055/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <section>
   <div className="col-md-12">
     <Header/>
   </div>
    <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
              <Sidebar/>
             </div>
      <div className="col-md-10 p-4 pr-5">
       
  
      {products.length <= 0 && (
        <div
          style={{ height: "300px" }}
          className="d-flex justify-content-center align-items-center m-5"
        >
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="warning" />
        </div>
      )}
      <div className="row">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      </div>
      </div>
      </section>
  );
};

export default Home;