'use client';
const { useRouter } = require("next/navigation");
const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [loggedIn, setLoggedIn] = useState(currentUser !== null);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
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


const useAppContext = () => useContext(AppContext);
export default useAppContext;