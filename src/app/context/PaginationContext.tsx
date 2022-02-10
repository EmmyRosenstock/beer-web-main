import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface PaginationProviderData {
  page: number
  changePage: (page:number) => void
}

interface PaginationProviderProps {
  children: ReactNode
}

const PaginationContext = createContext({} as PaginationProviderData)

const PaginationProvider = ({children, ...rest}: PaginationProviderProps) => {

  const [page, setPage] = useState<number>(1)

  useEffect(() => {
  }, [page])

  function changePage(page:number) {
    if(!isNaN(page) && page > 0){
      setPage(page)
    } else {
      setPage(1)
    }
  }

  return (
    <PaginationContext.Provider value={{page, changePage}}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePagination = () => {
  return useContext(PaginationContext)
}


export {PaginationProvider, usePagination}