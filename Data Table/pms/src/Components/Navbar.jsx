import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {
  let {id} = useParams()
  return (
    <div className='navbar'>
        <Link to={'/ProductList'} style={{textDecoration:"none"}}>ProductList</Link>
        <Link to={'/ProductDetails'} style={{textDecoration:"none"}}>ProductDetails</Link>
        <Link to={'/Addproduct'} style={{textDecoration:"none"}}>Addproduct</Link>
        <Link to={`/Editproduct/:${id}`} style={{textDecoration:"none"}}>Editproduct</Link>
        <Link to={`/Deleteproduct/:${id}`} style={{textDecoration:"none"}}>Deleteproduct</Link>
    </div>
  )
}

export default Navbar