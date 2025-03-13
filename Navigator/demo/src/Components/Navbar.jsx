import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div style={{display:"flex" , justifyContent:"space-evenly"}}>
        <Link to={"/"} style={{textDecoration:"none" , color:"white" , fontSize:"17px"}}>Home</Link>
        <Link to={"/about"} style={{textDecoration:"none" , color:"white" , fontSize:"17px"}}>About</Link>
        <Link to={"/product"} style={{textDecoration:"none" , color:"white" , fontSize:"17px"}}>Product</Link>
        <Link to={"/project"} style={{textDecoration:"none" , color:"white" , fontSize:"17px"}}>Project</Link>
        <Link to={"/login"} style={{textDecoration:"none" , color:"white" , fontSize:"17px"}}>Login</Link>

    </div>
    </div>
  )
}

export default Navbar


