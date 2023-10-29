import {
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react';

//? TESTING CONTEXT FOR DRY TITLE ANIMATION

interface ContextProps {
  timer: number;
  intervalId: NodeJS.Timeout | null;
  shouldStart: boolean
  setTimer: Dispatch<SetStateAction<number>>;
  setIntervalId: Dispatch<SetStateAction<NodeJS.Timeout | null>>;
  setShouldStart: Dispatch<SetStateAction<boolean>>;
};

const TitleAnimContext = createContext<ContextProps>({
  timer: 0,
  intervalId: null,
  shouldStart: true,
  setTimer: () => {},
  setIntervalId: () => {},
  setShouldStart: () => {}
});

export const useTitleAnimContext = () => useContext(TitleAnimContext);

export const TitleAnimContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [timer, setTimer] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [shouldStart, setShouldStart] = useState<boolean>(true);

  return (
    <TitleAnimContext.Provider value={{
      timer,
      intervalId,
      shouldStart,
      setTimer,
      setIntervalId,
      setShouldStart
    }}>
      {children}
    </TitleAnimContext.Provider>
  )
}


