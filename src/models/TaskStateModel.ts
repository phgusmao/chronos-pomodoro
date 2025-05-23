import { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //histórico, MainForm
  secondsRemaining: number; // Home, CountDown, histórico, MainForm, Button
  formattedSecondsRemaining: string; //Titulo, CountDown 
  activeTask: TaskModel | null;//CountDown, histórico, MainForm, Button
  currentCycle: number; // 1 a 8 Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  }
}