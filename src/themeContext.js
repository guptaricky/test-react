import { createContext, useContext, useState } from "react";

const themeContext = createContext({children});

const ThemeProvider = () => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeProvider.Provider value={{theme, setTheme}}>
            {children}
        </ThemeProvider.Provider>
    );
}

const ThemeComponent = () =>{
    const {theme, setTheme} = useContext(ThemeProvider)

    return(
        <>
            <p>Current Theme: {theme}</p>
            <button onClick={()=>setTheme((theme === 'light') ? "dark" : "light")}>Change Thmem</button>
        </>
    )
}

const App = () =>{
    <ThemeProvider>
        <ThemeComponent />
    </ThemeProvider>
}