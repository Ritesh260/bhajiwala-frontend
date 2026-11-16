
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "@/api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // RESTORE LOGIN SESSION
  // ==========================================

  useEffect(() => {
    const restoreSession = async () => {
      const savedToken = localStorage.getItem("userToken");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      setToken(savedToken);

      try {
        const response = await api.get("/user/auth/me");

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          logout();
        }
      } catch (error) {
        localStorage.removeItem("userToken");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  // ==========================================
  // LOGIN / SAVE USER SESSION
  // ==========================================

  const login = (userToken, userData) => {
    localStorage.setItem("userToken", userToken);

    setToken(userToken);
    setUser(userData);
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    localStorage.removeItem("userToken");

    setToken(null);
    setUser(null);
  };

  // ==========================================
  // CONTEXT VALUE
  // ==========================================

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ==========================================
// CUSTOM AUTH HOOK
// ==========================================

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}
