import { useState } from 'react'
import { Home } from './pages/Home'
import './styles/global.css'
import './styles/theme.css'
import { TaskStateModel } from './models/TaskStateModel'

// export type TaskStateModel = {
//   tasks: TaskModel[]; //histórico, MainForm
//   secondsRemaining: number; // Home, CountDown, histórico, MainForm, Button
//   formattedSecondsRemaining: string; //Titulo, CountDown 
//   activeTask: TaskModel | null;//CountDown, histórico, MainForm, Button
//   currentCycle: number; // 1 a 8 Home
//   config: {
//     workTime: number; // MainForm
//     shortBreakTime: number; //MainForm
//     longBreakTime: number; //MainForm
//   }
// }

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
}

export function App() {

  const [state, setState] = useState(initialState);

  return (
    <Home state={state} setState={setState} />
  )
}