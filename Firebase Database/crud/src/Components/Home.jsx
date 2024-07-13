import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)"}}>
        <Link to={'/'} style={{textDecoration:"none"}}>Home page</Link>
        <Link to={'/Create'} style={{textDecoration:"none"}}>Add-User</Link>
        <Link to={'/Getdatafromfirestore'} style={{textDecoration:"none"}}>User-List</Link>
        <Link to={'/update'} style={{textDecoration:"none"}}>Edit User-Data</Link>
    </div>
  )
}

export default Home