
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css'

export function CountDown() {

  const { state } = useTaskContext();

  return (
    <>
      {/*<h1 className={classes}>Olá mundo</h1>*/}
      <div className={styles.container}>
        {state.formattedSecondsRemaining}
      </div>
    </>
  )
}

