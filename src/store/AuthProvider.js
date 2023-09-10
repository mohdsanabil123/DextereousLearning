import { useState } from "react";
import AuthContext from "./authContext";

const AuthProvider = ({children}) => {

    const[token , setToken] = useState('');

   const value = { 
    setToken:setToken,
    token:token
 }

    return(
        <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
    );
};

export default AuthProvider;