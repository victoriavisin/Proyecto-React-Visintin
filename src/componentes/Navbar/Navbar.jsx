


const Navbar = () => {

    return (
        <ul style={{
            listStyleType: "none",
            display:"flex",
            fontFamily: "sans-serif",
            fontSize: "20px",}}>
            <li style={{marginRight: "10px"}}> <a href="http://localhost:3000/"> CARPAS </a></li>
            <li style={{marginRight: "10px"}}><a href="http://localhost:3000/"> MOCHILAS</a></li>
            <li style={{marginRight: "10px"}}><a href="http://localhost:3000/"> ACCESORIOS </a></li>
        </ul>
    )
}

export default Navbar