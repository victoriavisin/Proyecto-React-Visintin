import React from 'react'
import { Link } from "react-router-dom";
import "./Order.css"
import Button from '@mui/material/Button';



const Order = ({ordenId}) => {
  return (
    <div className='orden'>
        <h1>¡Muchas gracias por su compra!</h1>

        <h3>El id de tu compra es: {ordenId} </h3>
        
        <Button variant="contained">
           <Link to="/">Seguir comprando</Link>
      </Button>
  
    </div>
    
      
    
  )
}

export default Order
