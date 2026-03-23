import React, { createContext, useState } from 'react'

 export const Theme=createContext();
const ThemeContext = ({children}) => {

 
    const [theme,setTheme]=useState("light");
    const togleTheme=()=>{
        if(theme=="dark"){
            setTheme('light');
        }
        else{
            setTheme('dark')
        }
    }
    const[user,setUser]=useState("");
  return (
    
    <>
     <Theme value={{theme,togleTheme,user,setUser}}>
        {children}
     </Theme>
    </>
  )
}

export default ThemeContext