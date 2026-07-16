import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {

    const [search,setSearch]=useState("");

    return(
        <StudentContext.Provider value={{search,setSearch}}>
            {children}
        </StudentContext.Provider>
    )
}