import { createContext, useState } from "react";

export const Authcontext = createContext()
function AuthContextProvider({children}) {
    const [authState , setauthState] = useState({
        isAuth:false,
        token:null
    })

    const loginUser = (token)=>{
        setauthState({isAuth:true,token:token});
    }

    const logoutUser = ()=>{
        setauthState({isAuth:false,token:null});
    }

    return <Authcontext.Provider value={{loginUser , logoutUser , authState} }>{children}</Authcontext.Provider>
}

export default AuthContextProvider;
