import styles from './Detail.module.css'
import {usePopup} from "../../context/PopupContext";

const Detail = () => {

  const {beer, setSelected} = usePopup()

  return (
    <div className={styles.container} hidden={!beer}>
      <div className={styles.popup}>
        <div className={styles.card}>
          <span>{beer?.name}</span>
          <img className={styles.image} src={beer?.image_url}/>
          <span>{beer?.tagline}</span>
          <span>{beer?.description}</span>
          <button onClick={() => setSelected(undefined)} className={styles.btn}>close</button>
        </div>
      </div>
    </div>
  )
}

export {Detail}