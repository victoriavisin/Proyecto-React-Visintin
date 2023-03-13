import React, { useEffect, useState } from 'react'


import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'





import {db} from "../../firebaseConfig"
import {getDoc, collection, doc} from "firebase/firestore"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})


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
    <div>
    
 <ItemDetail product={product} />

  </div>
);
};
    
export default ItemDetailContainer

