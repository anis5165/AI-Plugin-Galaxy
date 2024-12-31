'use client';

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  // State for current user and logged-in status
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // Initialize state from localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        }
      } catch (error) {
        console.error("Error loading user from localStorage:", error);
      }
    }
  }, []);

  // Logout function
  const logout = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("user");
      } catch (error) {
        console.error("Error removing user from localStorage:", error);
      }
    }
    setCurrentUser(null);
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the AppContext
const useAppContext = () => useContext(AppContext);

export default useAppContext;
