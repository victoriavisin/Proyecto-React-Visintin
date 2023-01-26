import Navbar from "../Navbar/Navbar"
import logo from "../assets/Imagenes/logo.png"
import CartWidget from "../CartWidget/CartWidget"


const Header = () => {
    return (
       <div style= {{display: "flex" ,
       width: "100%",
       height: "20vh",
       justifyContent:"space-between",
       alignItems: "center"
       }}>
        <img src={logo} alt="logo" style={{ height: "20vh"}} />
        <Navbar />
        <CartWidget />

        </div>
    )
}

export default Header