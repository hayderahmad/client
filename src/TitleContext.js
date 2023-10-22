import React from "react";
import {useContext, useState, createContext} from "react";

const TitleContext = createContext();

export const TitleProvider = ({children}) => {
    const [title, setTitle] = useState("");
    return (
        <TitleContext.Provider value={{title, setTitle}}>
            {children}
        </TitleContext.Provider>
    );
}
export const UseTitle = () => useContext(TitleContext);