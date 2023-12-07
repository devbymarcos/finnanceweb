import { createContext, useContext, useState, ReactNode } from "react";

const AppCreateContext = createContext<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = ({ children }: AppContextProviderProps) => {
  const [dark, setDark] = useState(false);

  return (
    <AppCreateContext.Provider value={{ dark, setDark }}>
      {children}
    </AppCreateContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppCreateContext);
};
