import React, { useEffect, useState } from 'react'

import { products } from "../../ProductsMock";

import { useParams } from 'react-router-dom'

import "./ItemListDetail.css"



const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})


    useEffect( ()=>{

       let productSelected = products.find( prod => prod.id === Number(id) )

        setProduct( productSelected )

    },[])


  return (
    <div className='cartDetail'>
     <img src={product.img} alt="" height={300} />
     <h1>{product.title}</h1>
     <h3>{product.description}.</h3>
     <h4>${product.price}</h4>
     <button>Agregar al Carrito</button>


    </div>
  )
}

export default ItemDetailContainer

