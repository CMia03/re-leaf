// src/contexts/AuthContext.jsx
"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { ME_QUERY } from "@/graphql/queries/authServices";
import client from "@/graphql/appoloClient";

type UserType = {
  id: string;
  username: string;
  email: string;
};

type AuthContextType = {
  user: UserType | null;
  token: string | null;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);

      const fetchUser = async () => {
        try {
          const { data } = await client.query({
            query: ME_QUERY,
            context: {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            },
          });
          setUser(data.me);
        } catch (error) {
          console.error("Token invalide ou expiré");
          logout();
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    } else {
      setLoading(false); // Aucun token → fin du chargement aussi
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ user, token, logout, isAuthenticated: !!user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
