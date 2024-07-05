import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {
    const { authState } = useContext(Authcontext);
    
    if (!authState.isAuth) {
        return <Navigate to={'/login'} />
    }

    return children;
}

export default PrivateRoute;
