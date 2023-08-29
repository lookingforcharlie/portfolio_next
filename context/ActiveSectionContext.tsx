'use client';

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import type { SectionName } from '../lib/types';

interface ActiveSectionContextProviderProps {
  children: ReactNode;
}

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: FC<ActiveSectionContextProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  // We need this to keep track of this to disable the observer temporarily when user clicks on a link
  // Solve the problem at 3:55
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

// Create a custom hook to deal with the value of ActiveSectionContext might be null
export function useActiveSectionContext() {
  const contextObj = useContext(ActiveSectionContext);
  if (contextObj === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return contextObj;
}
