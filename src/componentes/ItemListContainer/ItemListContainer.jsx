
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import Spinner from "../Spinner/spinner"


//IMPORTAR BASE DE DATOS
import {db} from "../../firebaseConfig"
import {getDocs, collection, query, where} from "firebase/firestore"


const ItemListContainer = () => {

  const {categoryName} = useParams()
  const [item, setItems] = useState ([])


  useEffect(() => {

    const itemCollection = collection(db , "products")
    


    if (categoryName) {

      const q = query (itemCollection, where ("category","==", categoryName))

      getDocs(q)
    .then( (res) => {
      const products = res.docs.map( product => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setItems(products)
    })
    .catch((err) => console.log ("error:" + err))
      
    } else {
      getDocs(itemCollection)
    .then( (res) => {
      const products = res.docs.map( product => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setItems(products)
    })
    .catch((err) => console.log ("error:" + err))
      
    }

    
    
  }, [categoryName]);




  return (
    <div>
      {item.length < 1 ? (
      <Spinner/>
      ) : (
  <ItemList items={item} />
  )}
    </div>
  );
};


export default ItemListContainer

