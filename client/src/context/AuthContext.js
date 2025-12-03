import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load from storage when refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("portfolio_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // LOGIN
  const login = (token, userData) => {
    localStorage.setItem("portfolio_token", token);
    localStorage.setItem("portfolio_user", JSON.stringify(userData));
    setUser(userData);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("portfolio_token");
    localStorage.removeItem("portfolio_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
