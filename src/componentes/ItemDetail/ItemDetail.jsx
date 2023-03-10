

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import  "./ItemDetail.css"

import Swal from 'sweetalert2'

const ItemDetail = ({ product }) => {

  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = ( cantidad ) => {

    const obj = {
      ...product,
      quantity: cantidad
    }

    addToCart( obj )

    Swal.fire({
      icon: 'success',
      title: 'Se agrego el producto al carrito',
    })
  };

  const quantity = getQuantityById(product.id)

  return (
    <div className="detailItemContainer">
      <div className="detailImg">
        <img src={product.img} alt="" />
      </div>

      <div className="containerDetail">
          <h1> {product.title}</h1>
          <h3> {product.description}.</h3>
          <h4>Precio: ${product.price}</h4>

        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  );
};

export default ItemDetail;