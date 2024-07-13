import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from '../Components/Create'
// import Delete from '../Components/Delete'
import Getdatafromfirestore from '../Components/Getdatafromfirestore'
import Update from '../Components/Update'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Create' element={<Create />}></Route>
            <Route path='/Getdatafromfirestore' element={<Getdatafromfirestore />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
            {/* <Route path='/delete' element={<Delete />}></Route> */}
        </Routes>
    </div>
  )
}

export default Allroutes