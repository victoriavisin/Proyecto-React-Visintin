

import React from "react";

import  "./ItemDetail.css"



const ItemDetail = ({ product }) => {


 
  return (
    <div className="detailItemContainer">
      <div className="detailImg">
        <img src={product.img} alt="" />
      </div>

      <div className="containerDetail">
          <h1> {product.title}</h1>
          <h3> {product.description}.</h3>
          <h4>Precio: ${product.price}</h4>
          

        
      </div>
    </div>
  );
};

export default ItemDetail;