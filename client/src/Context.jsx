import React, {createContext, useState} from 'react';

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <UserContext.Provider value={{userInfo, setUserInfo, isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}