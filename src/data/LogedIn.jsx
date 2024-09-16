import { createContext, useState } from "react";

const IsLogedIn = createContext();

const IsLogedInProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <IsLogedIn.Provider value={{ isLogedIn, setIsLogedIn }}>
      {children}
    </IsLogedIn.Provider>
  );
};

export { IsLogedIn, IsLogedInProvider };
