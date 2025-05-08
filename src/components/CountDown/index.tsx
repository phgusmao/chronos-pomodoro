import styles from './styles.module.css'

//USANDO DESTRUCTURING PARA ENCURTAR CÓDIGO

export function CountDown() {

  return (
    <>
      {/*<h1 className={classes}>Olá mundo</h1>*/}
      <div className={styles.container}>
        00:00
      </div>
    </>
  )
}

