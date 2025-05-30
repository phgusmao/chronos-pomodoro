import { useState } from 'react'
import { Home } from './pages/Home'
import './styles/global.css'
import './styles/theme.css'
import { TaskStateModel } from './models/TaskStateModel'
import { TaskContext, TaskContextProvider } from './contexts/TaskContext'

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '05:00',
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
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}