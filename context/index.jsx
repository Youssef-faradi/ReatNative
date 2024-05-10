import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
  const [Route, setRoute] = useState("Profile");

  const appValue = {
    Route,
    setRoute,
  };

  return <appContext.Provider value={appValue}>{children}</appContext.Provider>;
};

const useAppContext = () => useContext(appContext);

export { AppProvider, useAppContext };