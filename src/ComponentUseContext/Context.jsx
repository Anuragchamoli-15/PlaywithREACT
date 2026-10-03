import {createContext, useState } from "react";

export const DataContext = createContext();


export function DataProvider({children}) {
    const [item, setItem] = useState(0);
  return (
    <DataContext.Provider value ={{ item, setItem }}>
      {children}
    </DataContext.Provider>
  );
}

