
import React from 'react'
import ListNavbar from '../ListNavbar/ListNavbar'
import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <ul className='categoria'>
        <Link to="/category/carpas"><ListNavbar title="CARPAS"/></Link>
        <Link to="/category/mochilas"><ListNavbar title="MOCHILAS"/></Link>
        <Link to="/category/accesorios"><ListNavbar title="ACCESORIOS"/></Link>
        <Link to="/"><ListNavbar title="TODO"/></Link>
    </ul>
  )
}

export default Navbar