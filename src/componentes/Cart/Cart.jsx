import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

import Swal from "sweetalert2";




import FormCheckOut from "../FormCheckOut/FormCheckOut";
import FinishBuy from "../FinishBuy/FinishBuy";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);


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
        Swal.fire("No se borro el carrito", "", "info");
      }
    });
  };

  const total = getTotalPrice();

  if (orderId) {
    return (
      <FinishBuy orderId={orderId} />
    );
  }

  return (
    <div>
      {!buy ? (
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
              <Button variant="contained" onClick={() => setBuy(true)}>
                  Finalizar Compra
                </Button>
                <Button onClick={() => AlertaLimpiarCarrito()} variant="contained">
                  Vaciar carrito
                </Button>
            </div>
          )}

          
        </div>
      ) : (
        <FormCheckOut
          cart={cart}
          total={total}
          clearCart={clearCart}
          setOrderId={setOrderId}
        />
      )}
    </div>
  );
};

export default Cart;