import React, { createContext, useContext, useState } from "react";
import { AuthUseCase } from "../../core/usecases/AuthUseCase";
import { SupabaseAuthService } from "../../infrastructure/services/SupabaseAuthService";
import { User } from "../../core/entities/User";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authUseCase = new AuthUseCase(new SupabaseAuthService());

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const loggedInUser = await authUseCase.login(email, password);
    setUser(loggedInUser);
  };

  const signup = async (email: string, password: string) => {
    const signedUpUser = await authUseCase.signup(email, password);
    setUser(signedUpUser);
  };

  const logout = async () => {
    await authUseCase.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
