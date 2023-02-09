

import ProductoCard from "../ProductoCard/ProductoCard";
import "./ItemList.css"


import React from 'react'

const itemList = ({items}) => {
  return (
    <div className='card'>
      {items.map((element) => {
        return <ProductoCard element={element} key={element.id} />;
      })}
    </div>
  )
}

export default itemList


