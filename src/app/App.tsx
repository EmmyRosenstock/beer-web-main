import React, {useEffect, useState} from 'react'
import {Beer, BeerType, BeerProps} from './component/beer/Beer'
import {Server} from './server'
import {Pagination} from './component/pagination/Pagination'
import {usePagination} from "./context/PaginationContext";
import styles from './App.module.css'
import {Detail} from "./component/detail/Detail";
import {PopupProvider, usePopup} from "./context/PopupContext";
import { GiBeerBottle } from "react-icons/gi";

function App() {

  const {getAll} = Server()
  const [beers, setBeers] = useState<BeerType[]>([])
  const {setSelected} = usePopup()
  const {page} = usePagination()

  useEffect(() => {
    getAll(page).then(setBeers)
  }, [page])

  return (
    <>
      <header className={styles.header}>

       <div className={styles.logo}>
         <GiBeerBottle size={40} />
         <span>Beer</span>
       </div>
       
      </header>
        <main>
          <section className={styles.section}>
            
            <ul className={styles.list}>
              {beers.map(e => <Beer key={e.id} beer={e} setSelected={() => setSelected(e)}/>)}
            </ul>
          </section>
          <section>
            <Pagination/>
          </section>
          <Detail/>
        </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
