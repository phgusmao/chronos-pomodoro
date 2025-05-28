import { HomeProps } from '../../pages/Home'
import styles from './styles.module.css'

export function CountDown({ state }: HomeProps) {

  return (
    <>
      {/*<h1 className={classes}>Olá mundo</h1>*/}
      <div className={styles.container}>
        {state.formattedSecondsRemaining}
      </div>
    </>
  )
}

