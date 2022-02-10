import {createContext, ReactNode, useContext, useState} from "react";
import {BeerType} from "../component/beer/Beer";

interface PopupProviderData {
  beer: BeerType | undefined
  setSelected: (beer: BeerType | undefined) => void
}

interface PopupProviderProps {
  children: ReactNode
}

const PopupContext = createContext({} as PopupProviderData)

const PopupProvider = ({children, ...rest}: PopupProviderProps) => {

  const [beer, setBeer] = useState<BeerType>()

  function setSelected(beer: BeerType | undefined) {
    setBeer(beer)
  }

  return (
    <PopupContext.Provider value={{beer, setSelected}}>
      {children}
    </PopupContext.Provider>
  )
}

const usePopup = () => {
  return useContext(PopupContext)
}


export {PopupProvider, usePopup}