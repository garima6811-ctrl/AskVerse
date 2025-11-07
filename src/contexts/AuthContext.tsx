import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("askallthingsdata_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("askallthingsdata_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("askallthingsdata_user");
    }
  }, [user]);

  const login = (email: string) => {
    const name = email.split("@")[0].split(".").map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(" ");
    
    setUser({ email, name });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
