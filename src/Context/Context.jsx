import { createContext, useState } from "react";
import firebase from "../Firebase/config"

const FireBaseContext = createContext()
const AuthContext = createContext(null)

const FireBaseContextProvider = (props)=>{
    return(
        <FireBaseContext.Provider value={firebase}>
            {props.children}
        </FireBaseContext.Provider>
    )
}



const AuthContextProvider = (props)=>{
    const [user,setUser] = useState(null)
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}



export {FireBaseContext,FireBaseContextProvider,AuthContext,AuthContextProvider}