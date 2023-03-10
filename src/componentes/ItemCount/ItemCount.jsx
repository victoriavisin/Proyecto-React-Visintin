import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect( ()=>{
    setContador(initial)
  }, [initial])

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
    <h4 className="cantidad">Cantidad: {contador}</h4>
    <div className="btn">
      <Button variant="outlined" onClick={restar}>
        -
      </Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        agregar al carrito
      </Button>
      <Button variant="outlined" onClick={sumar}>
        +
      </Button>
    </div>
  </div>
  );
};

export default ItemCount;
