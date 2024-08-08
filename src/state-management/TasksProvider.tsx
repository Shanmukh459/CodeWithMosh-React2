import React, { ReactNode, useReducer } from "react"
import tasksReducer from "./reducers/tasksReducer"
import TasksContext from "./contexts/TasksContext"

interface Props {
  children: ReactNode
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
