import {useState} from "react";
import "./FormCheckout.css"
import {addDoc,collection,updateDoc,doc} from "firebase/firestore"
import {db} from "../../firebaseConfig"
import Swal from "sweetalert2";

const FormCheckout = ({cart,total,clearCart,setOrdenId}) => {

    const [usuario, setUsuario] = useState ({apellido:"", nombre:"",email:""})


    const handleSubmit = (e) => {
        e.preventDefault ()

       const orden = {
        buyer: usuario,
        items: cart,
        total: total,
       }

       const ordenCollection = collection (db, "orders")
       addDoc(ordenCollection,orden)
       .then((res) => setOrdenId(res.id))
       .catch((err) => console.log(err));
       
       
       cart.map((product) =>
        updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
       clearCart()

       
       
       
    }
    
    const AlertaComprar = ()=> {
     Swal.fire({
         icon: 'success',
         title: 'Se realizo la compra',
       })
    }
    
    return (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese su Apellido' name ="apellido" onChange={(e)=> setUsuario({...usuario, apellido: e.target.value})} />
            <input type="text" placeholder='Ingrese su Nombre' name ="nombre" onChange={(e)=> setUsuario ({...usuario, nombre: e.target.value})}/>
            <input type="text" placeholder='Ingrese su correo electrónico' name ="email" onChange={(e)=>setUsuario ({...usuario, email: e.target.value})}/>
            <button onClick={() => AlertaComprar()}>COMPRAR</button>

        </form>
      
    </div>
  )
}

export default FormCheckout
