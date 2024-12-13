import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = () => {

    const [isLoggedin, setIsLoggedin] = useState(false) 

    return(
        <>
            <AuthContext.Provider value={{isLoggedin, setIsLoggedin}}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

const AuthComponent = () => {

    const {isLoggedin, setIsLoggedin} = useContext(AuthContext);
    
        if(isLoggedin){
            return <div>This is the Dashboard</div>
        }
        return <>
            <div>User is not logged in</div>
            <button onClick={()=>setIsLoggedin(!isLoggedin)}></button>
        </>
        
    
}

const App = () => {
    <AuthProvider>
        <AuthComponent />
    </AuthProvider>
}