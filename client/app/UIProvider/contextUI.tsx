"use client"
import { createContext, useState, ReactNode, useContext, useEffect, use } from "react";
interface UIcontextProps{
isOpen:boolean,
setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
passHero:boolean,
setPassHero:React.Dispatch<React.SetStateAction<boolean>>
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
  const [passHero, setPassHero] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      
      if (scrollPosition > 600) {
        setPassHero(true);
      } else {
        setPassHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
  useEffect(()=>{
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return ()=>{
        document.body.style.overflow ="auto"
    }
  },[isOpen])

  const value={
    isOpen, setIsOpen,
    passHero, setPassHero
  }
  return(
    <UIcontext.Provider
    value={value}
    >
        {children}
    </UIcontext.Provider >
)
}