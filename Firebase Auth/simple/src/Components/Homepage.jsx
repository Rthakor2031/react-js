import GoogleButton from 'react-google-button'
import {auth, provider} from '../Services/Fb'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'


const homepage = () => {
  const [User] = useAuthState(auth)
  console.log(User);

    const handleclick = ()=>{
      signInWithPopup(auth , provider).then((res) => {
        console.log('Sign-in successful:',res)
        alert(`Login sucessfully with google!...`)
      })
      .catch((err)=>console.log(err))
    }

    const handleLogout = ()=>{
      signOut(auth).then((res)=>{alert("you're LogOut!....")})
      .catch((err)=>console.log(err))
    }

  return (
    <div style={{textAlign:"center"}}>
        <h2 style={{color:"red"}}>Sign-In with Google</h2>
        <div style={{display:"flex", justifyContent:"space-evenly" , width:"350px", margin:"auto"}}>
        <GoogleButton onClick={handleclick}>Login With Google</GoogleButton>
        <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default homepage