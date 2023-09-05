import { useState } from "react";
import AuthContext from "./authContext";

const AuthProvider = ({children}) => {
   const[isAuthanticated , setAuthanticated] = useState();

    const loginHandler = () => {
       setAuthanticated(true);
    }

    const logoutHandler=() => {
        setAuthanticated(false);
    }


   const value = {
    loginHandler:loginHandler,
    logoutHandler:logoutHandler,
    isAuthanticated:!!isAuthanticated
   }

    return(
        <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
    );
};

export default AuthProvider;