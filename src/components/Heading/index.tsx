import styles from './styles.module.css'

type HeadingProps = {
  children: React.ReactNode;
}

//USANDO DESTRUCTURING PARA ENCURTAR CÓDIGO

export function Heading({children}: HeadingProps) {

  return(
      <>
        {/*<h1 className={classes}>Olá mundo</h1>*/}
        <h1 className={styles.heading}>{children}</h1>
      </> 
    )
}

//USANDO PROPS NORMALMENTE

/*export function Heading(props: HeadingProps) {
  //const classes = `${styles.heading} ${styles.cyan}`
  const {children} = props;

  return(
      <>
        <h1 className={classes}>Olá mundo</h1>
        <h1 className={styles.cyan}>{children}</h1>
      </> 
    )
*/

