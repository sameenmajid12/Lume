import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const logOutUser = () => {
    console.log("logged out");
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <UserContext.Provider value={{ user, setUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}
