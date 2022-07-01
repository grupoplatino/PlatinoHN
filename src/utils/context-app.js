import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const ContextApp = ({ children }) => {
  let indexOfUrl = 0;
  const [navIndexContext, setNavIndexContext ] = useState(indexOfUrl);
  return(
      <DataContext.Provider value={[
        navIndexContext, setNavIndexContext
      ]}>
        { children }
      </DataContext.Provider>
  )
}