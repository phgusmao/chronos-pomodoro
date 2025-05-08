import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

//USANDO DESTRUCTURING PARA ENCURTAR CÓDIGO

export function Logo() {

  return(
      <>
        {/*<h1 className={classes}>Olá mundo</h1>*/}
        <div className={styles.logo}>
          <a href="" className={styles.logoLink}>
            <TimerIcon/>
            <span>Chronos</span>
          </a>
        </div>
      </> 
    )
}

//USANDO PROPS NORMALMENTE

/*export function Logo(props: LogoProps) {
  //const classes = `${styles.Logo} ${styles.cyan}`
  const {children} = props;

  return(
      <>
        <h1 className={classes}>Olá mundo</h1>
        <h1 className={styles.cyan}>{children}</h1>
      </> 
    )
*/

