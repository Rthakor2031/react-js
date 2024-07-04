import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Privateroute from './Privateroute'
import Homepage from './Homepage'


const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/homepage' element={<Homepage />}></Route>
            <Route path='/Dashboard' element={
              <Privateroute>
              <Dashboard/>
              </Privateroute>
              }></Route>
        </Routes>
    </div>
  )
}

export default Allroutes