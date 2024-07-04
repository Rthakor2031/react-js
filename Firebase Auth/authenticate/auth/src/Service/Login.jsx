import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './fire'

const Login = () => {
    const [email , setemail] =useState("")
    const [password , setpassword] =useState("")

    const handlesubmit = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    const handlelogout = () =>{
      signOut(auth).then((res)=>alert('Logout sucessfully!..',res))
      .catch((err)=>console.log(err))
    
    }

  return (
    <div style={{textAlign:"center"}}>
        <h4>Login</h4>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder='enter email' onChange={(e)=>setemail(e.target.value)}/>
            <br /><br />
            <input type="text" placeholder='password ' onChange={(e)=>setpassword(e.target.value)}/>
            <br /><br />
            <input type="submit" />
            <br />
            <button onClick={handlelogout}>Logout</button>
        </form>
    </div>
  )
}

export default Login