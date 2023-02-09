
import CartWidget from "../CartWidget/CartWidget"
import Navbar from "../Navbar/Navbar"


const Header = () => {
    return (
       <div style= {{display: "flex" ,
       width: "100%",
       height: "20vh",
       justifyContent:"space-between",
       alignItems: "center"
       }}>
        <img src="https://res.cloudinary.com/dyxviqtpy/image/upload/v1675975818/logo_k4nwqn.png" alt="logo" style={{ height: "20vh"}} />
        <Navbar/>
        <CartWidget />

        </div>
    )
}

export default Header