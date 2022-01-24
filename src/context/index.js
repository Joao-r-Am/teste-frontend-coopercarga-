import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvide = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});

    return(
        <context.Provider value={{
            userData,
            repos,
            setUserData,
            setRepos
        }}>
            {props.children}
        </context.Provider>
    );
}