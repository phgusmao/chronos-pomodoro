import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps) {
  const { state, setState } = props;

  // function handleClick() {
  //   setState(prevState => {
  //     prevState.currentCycle = 8
  //     return prevState;
  //   })
  // }

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        currentCycle: 5
      }
    })
  }

  return (
    <MainTemplate>
      <Container>
        <button onClick={handleClick}>Clicar</button>
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}