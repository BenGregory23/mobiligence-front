import React, { createContext, useState, ReactNode } from 'react';
import { Utilisateur } from '../types/utilisateur';

export interface AuthContextType {
  user: Utilisateur | null;
  setUser: React.Dispatch<React.SetStateAction<Utilisateur| null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  setUser: () => {},
  isAuthenticated: true,
  setIsAuthenticated: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Utilisateur | null>(defaultAuthContext.user);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultAuthContext.isAuthenticated);

  const contextValue: AuthContextType = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
