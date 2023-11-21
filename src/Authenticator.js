import React, { createContext, useContext, useState } from 'react';

const Authenticator = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const isAuthenticated = checkCredentials(username, password);

    if (isAuthenticated) {
      setUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const checkCredentials = (username, password) => {
    return username === 'admin' && password === 'admin';
  };

  return (
    <Authenticator.Provider value={{ user, login, logout }}>
      {children}
    </Authenticator.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Authenticator);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};