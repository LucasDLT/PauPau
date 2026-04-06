"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface ContextProps {}
interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

export const useAppContext = (): ContextProps => {
  const contextApp = useContext(Context);
  if (!contextApp) {
    throw new Error("Error al iniciar context app");
  }
  return contextApp;
};

export const ContextProvider = ({ children }: ProviderProps) => {


  const value = {};
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
