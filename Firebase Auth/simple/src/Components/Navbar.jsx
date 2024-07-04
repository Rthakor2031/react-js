import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-evenly"}}>
        <Link to={'/homepage'} style={{textDecoration:"none"}}>Home-Page</Link>
        <Link to={'/Dashboard'} style={{textDecoration:"none"}}>Dashboard</Link>
    </div>
  )
}

export default Navbar