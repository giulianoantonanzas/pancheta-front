import React, { useContext, useState } from "react";
import User from "./UserType";

export type UserContextType = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const useUser = () => {
  return useContext(UserContext);
};

export const UserContext = React.createContext<UserContextType>({
  user: { token: localStorage.getItem("panchetaToken") || undefined },
  setUser: user => user
});

export const UserContextProider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({
    token: localStorage.getItem("panchetaToken") || undefined
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default useUser;
