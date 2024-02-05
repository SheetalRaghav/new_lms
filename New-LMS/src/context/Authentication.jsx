import React, { createContext, useState } from "react";


export const AuthContext = createContext();


export const Authentication = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authRole, setAuthRole] = useState('');
const [userId,setUserId]=useState('')
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, authRole, setAuthRole, userId,setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

