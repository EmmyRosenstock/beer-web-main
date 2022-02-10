import styles from './Beer.module.css'
import {usePopup} from "../../context/PopupContext";

type BeerType = {
  id: number
  name: string
  tagline: string
  description: string
  image_url: string
}

type BeerProps = {
  beer: BeerType
  setSelected: (beer: BeerType) => void
}

const Beer = ({beer, setSelected}: BeerProps) => {

  return (
    <li className={styles.container} onClick={() => setSelected(beer)}>
      <div>{beer.name}</div>
      <div>{beer.tagline}</div>
      
    </li>
  )
}

export type {BeerType, BeerProps}
export {Beer}