import React, { useContext, useState } from "react";

export type PositionContextType = {
  position: number;
  setPoistion: React.Dispatch<React.SetStateAction<number>>;
};

const usePositionPage = () => {
  return useContext(PositionContext);
};

export const PositionContext = React.createContext<PositionContextType>({
  position: 0,
  setPoistion: value => value
});

export const PositionProvider: React.FC = ({ children }) => {
  const [position, setPoistion] = useState(0);

  return (
    <PositionContext.Provider value={{ position, setPoistion }}>
      {children}
    </PositionContext.Provider>
  );
};

export default usePositionPage;
