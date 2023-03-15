import {useState} from "react";
import "./FormCheckout.css"
import {addDoc,collection,updateDoc,doc} from "firebase/firestore"
import {db} from "../../firebaseConfig"
import Swal from "sweetalert2";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


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
         text: "En breve nos comunicaremos a su email",
       })
    }

    
    
    return (

        
        <div className="form">
          <h2>Complete el formulario para efectuar la compra:</h2>

          <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField id="outlined-basic" label="Ingrese su apellido" variant="outlined" name ="apellido" onChange={(e)=> setUsuario({...usuario, apellido: e.target.value})} />
          <TextField id="outlined-basic" label="Ingrese su nombre" variant="outlined" name ="nombre" onChange={(e)=> setUsuario({...usuario, nombre: e.target.value})} />
          <TextField id="outlined-basic" label="Ingrese su email" variant="outlined" name ="email" onChange={(e)=> setUsuario({...usuario, email: e.target.value})} />
          <button onClick={() => AlertaComprar()}>COMPRAR</button>
          
    </Box>
          
   
      
    </div>
  )
}

export default FormCheckout
