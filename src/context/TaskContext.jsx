import { createContext, useState } from "react"

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])

  function addTask(text) {
    if(text.trim() === "") return
    setTasks([...tasks, text])
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}