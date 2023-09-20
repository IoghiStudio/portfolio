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
  isMenuOpened: boolean;
  setMyName: Dispatch<SetStateAction<string>>;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<ContextProps>({
  myName: '',
  isMenuOpened: false,
  setMyName: () => {},
  setIsMenuOpened: () => {}
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children } : { children: ReactNode}) => {
  const [myName, setMyName] = useState<string>('Denisa');
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <AppContext.Provider 
      value={{
        myName,
        isMenuOpened,
        setMyName,
        setIsMenuOpened
      }}
    >
      {children}
    </AppContext.Provider>
  )
}