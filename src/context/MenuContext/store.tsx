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
  isMenuOpened: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<ContextProps>({
  isMenuOpened: false,
  setIsMenuOpened: () => {}
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children } : { children: ReactNode}) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpened,
        setIsMenuOpened
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
