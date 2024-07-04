import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from './fire'

const Signin = () => {
    const [email , setemail] =useState("")
    const [password , setpassword] =useState("")

    const handlesubmit = (e) =>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then((res)=>{
          console.log(res)
          alert("Identifier Created!....")
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div style={{textAlign:"center"}}>
        <h2>Signin</h2>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder='enter email' onChange={(e)=>setemail(e.target.value)}/>
            <br /><br />
            <input type="text" placeholder='password ' onChange={(e)=>setpassword(e.target.value)}/>
            <br /><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signin