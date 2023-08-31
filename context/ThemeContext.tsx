'use client';
// Since 'use client' declared here, each component imported here will also be client component.

import { Theme } from '@/lib/types';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextProviderProps {
  children: ReactNode;
}

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggleTheme: () => void;
};

// Default value of createContext (inside ()) is used outside the provider, barely useful
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Need 'children' here, so that we can use Provider to wrap everything in layout.tsx file
const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;
    if (localTheme !== null) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      // check the system mode and align the Theme with it
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    // ThemeContext is created by createContext() upfront, which has Provider property.
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

// Create a custom hook to deal with the value of ThemeContext might be null
export function useTheme() {
  const contextObj = useContext(ThemeContext);
  if (contextObj === null) {
    throw new Error(
      'useActiveThemeContext must be used within an ActiveThemeContextProvider'
    );
  }
  // contextObj will an object of values ThemeContext.Provider provides
  return contextObj;
}
