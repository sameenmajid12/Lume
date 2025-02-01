import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const logOutUser = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, setUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}
