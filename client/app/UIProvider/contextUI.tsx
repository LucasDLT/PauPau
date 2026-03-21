"use client"
import { createContext, useState, ReactNode, useContext, useEffect, useRef } from "react";
interface UIcontextProps{
isOpen:boolean,
setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
passHero:boolean,
setPassHero:React.Dispatch<React.SetStateAction<boolean>>
heroRef:React.RefObject<HTMLElement | null>
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
  const [passHero, setPassHero] = useState<boolean>(false);//estado para visibilizar elementos tras pasar herosection
  const heroRef = useRef<HTMLElement>(null);//referencia al herosection
  //efecto e intersecion observer para la visibilidad del title del margin izquierdo cuando no tengamos la imagen del hero visible para mayor consistencia visual
  useEffect(() => {
    const observer =new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if (entry.isIntersecting) {
        setPassHero(false)
      }else{
        setPassHero(true)
      }
    },{/*aca irian las options*/
      root:null,
      rootMargin:"0px",
      threshold:1
    })

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
  },[])
  useEffect(()=>{
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return ()=>{
        document.body.style.overflow ="auto"
    }
  },[isOpen])

  const value={
    isOpen, setIsOpen,
    passHero, setPassHero,
    heroRef
  }
  return(
    <UIcontext.Provider
    value={value}
    >
        {children}
    </UIcontext.Provider >
)
}