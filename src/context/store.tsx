"use client";
import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";

interface ContextProps {
  myName: string;
  setMyName: Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<ContextProps>({
  myName: '',
  setMyName: () => {}
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children } : { children: ReactNode}) => {
  const [myName, setMyName] = useState<string>('Denisa');

  return (
    <AppContext.Provider 
      value={{
        myName,
        setMyName,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}