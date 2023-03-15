import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { CartContext } from "../../context/CartContext";
import {db} from "../../firebaseConfig"
import {getDoc, collection, doc} from "firebase/firestore"
import "./ItemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount";


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    const { addToCart, getQuantityById } = useContext( CartContext )

    const onAdd = ( cantidad ) => {
  
      const obj = {
        ...product,
        quantity: cantidad
      }
  
      addToCart( obj )
  
      
    };
  
    const quantity = getQuantityById(product.id)




    useEffect( ()=>{

      const itemCollection = collection (db, "products")

      const ref = doc (itemCollection, id)

      getDoc(ref)
      .then ((res)=> {
        setProduct ({ ...res.data(),
        id: res.id
      })
      })
      .catch (err => console.log(err))

    },[id])


  return (
    <div className='contenedor'>
    
 <ItemDetail product={product} />
 <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />

  </div>
);
};
    
export default ItemDetailContainer

