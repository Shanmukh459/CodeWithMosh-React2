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

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])
  const [user, authDispatch] = useReducer(authReducer, "")

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
