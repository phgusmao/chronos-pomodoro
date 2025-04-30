import styles from './Heading.module.css'

export function Heading() {
  const classes = `${styles.heading} ${styles.cyan}`
  return(
      <>
        <h1 className={classes}>Olá mundo</h1>
        <h1 className={styles.cyan}>Olá mundo</h1>
      </> 
    )
}