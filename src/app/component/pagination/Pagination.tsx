import React from 'react'
import {usePagination} from '../../context/PaginationContext'
import styles from './Pagination.module.css'

const Pagination = () => {

  const {page, changePage} = usePagination()

  function increment() {
    changePage(page + 1)
  }

  function decrement() {
    changePage(page - 1)
  }

  return (
    <div className={styles.container}>
      <button className={styles.buttom} onClick={decrement}>-</button>
      <input className={styles.search} value={page} onChange={e => changePage(Number(e.target.value))}/>
      <button className={styles.buttom} onClick={increment}>+</button>
    </div>
  )
}

export {Pagination}