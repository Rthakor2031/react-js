import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '../Services/Fb'


const Privateroute = ({children}) => {
    const [User] = useAuthState(auth)

    if(!User){
        return <Navigate to={'/homepage'} />
    }
  return children
}

export default Privateroute