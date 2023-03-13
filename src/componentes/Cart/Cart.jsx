import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Cart = () => {
  const { cart,clearCart,deleteProductById, getTotalPrice} =
    useContext(CartContext);


  const AlertaLimpiarCarrito = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres borrar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, borrar!",
      denyButtonText: "No borrar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Carrito se borro con exito!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("No se borro el carrito", "", "success");
      }
    });
  };

  const total = getTotalPrice();


  return (
    <div>
      
        <div className="cart-container">
          {cart.length < 1 ? (
            <h1 className="carrito-vacio">¡EL CARRITO ESTA VACIO!</h1>
          ) : (
            <div className="container-items">
              {cart.map((product) => {
                return (
                  <div key={product.id} className="cart-item">
                    <img src={product.img} alt="" />
                    <div className="cart-item-info">
                      <h2>{product.title}</h2>
                      <h2>Precio: ${product.price}</h2>
                      <h2>Unidades: {product.quantity}</h2>
                    
                    <Button variant="outlined" color="error" onClick={() => deleteProductById(product.id)}>
                      BORRAR</Button>
                      
                  </div>
                  </div>
                    
                );
              })}

              <h1 className="total">Total a pagar: ${total}</h1>
              <div className="btn">
              <Button variant="contained">
                PAGAR
                </Button>
                <Button onClick={() => AlertaLimpiarCarrito()} variant="contained">
                  Vaciar carrito
                </Button>
                <Button variant="contained">
                <Link to="/">Seguir comprando</Link>
                </Button>
                </div>
            </div>
          )}

          
        </div>
  
  </div>
  );
};

export default Cart;