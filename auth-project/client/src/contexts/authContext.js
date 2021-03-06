import React, { createContext, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ loading: true, data: null});

    const setAuthData = (info) => {
        setAuth({data: info})
    }

    return(
        <authContext.Provider value={{auth, setAuthData}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;