"use client"
import { createContext, useState, ReactNode, useContext } from "react";
interface UIcontextProps{
isOpen:boolean,
setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
}
export const UIcontext = createContext<UIcontextProps|undefined>(undefined)

export const useUI=():UIcontextProps=>{
const contextUI=useContext(UIcontext)
if (!contextUI) {
    throw new Error(
        "Error al intentar ingresar al contexto de UI"
    )
}
return contextUI
}

export const UIProvider = ( {children}: {children: ReactNode})=>{
  const [isOpen, setIsOpen] = useState<boolean>(false); //estado para abrir y cerrar el menu, agregar efectos de animacion al titulo.
    
  const value={
    isOpen, setIsOpen
  }
  return(
    <UIcontext.Provider
    value={value}
    >
        {children}
    </UIcontext.Provider >
)
}