import { useReducer } from "react"
import "./App.css"
import LoginStatus from "./state-management/LoginStatus"
import TaskList from "./state-management/TaskList"
import tasksReducer from "./state-management/reducers/tasksReducer"
import TasksContext from "./state-management/contexts/TasksContext"
import NavBar from "./state-management/NavBar"
import HomePage from "./state-management/HomePage"
import authReducer from "./state-management/reducers/authReducer"
import AuthContext from "./state-management/contexts/authContext"
import AuthProvider from "./state-management/AuthProvider"

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  )
}

export default App
