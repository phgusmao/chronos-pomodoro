import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa')
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: '00:00', //conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min </p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}