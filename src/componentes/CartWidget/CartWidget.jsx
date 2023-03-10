import { Link } from "react-router-dom";

import "./CartWidget.css";
import { BsShop } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { getTotalItems } = useContext(CartContext)

  return (
    <Link to="/cart">
      <div className="cart">
        <BsShop/>
        <div className="contador">
          <span>{getTotalItems()}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;