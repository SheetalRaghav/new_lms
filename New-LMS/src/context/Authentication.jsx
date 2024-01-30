import React, { createContext, useState } from "react";


export const AuthContext = createContext();


export const Authentication = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authRole, setAuthRole] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, authRole, setAuthRole }}>
      {children}
    </AuthContext.Provider>
  );
};

