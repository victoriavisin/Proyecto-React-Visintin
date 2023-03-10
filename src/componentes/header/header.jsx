
import CartWidget from "../CartWidget/CartWidget"
import Navbar from "../Navbar/Navbar"
import "./header.css"


const Header = () => {
    return (
       <div className="header">
        <img src="https://res.cloudinary.com/dyxviqtpy/image/upload/v1678368210/big_bear-removebg-preview_pcvhza.png" alt="logo" style={{ height: "30vh"}} />
        <Navbar/>
        <CartWidget />

        </div>
    )
}

export default Header