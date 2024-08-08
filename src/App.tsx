import { useReducer } from "react"
import "./App.css"
import tasksReducer from "./state-management/reducers/tasksReducer"
import NavBar from "./state-management/NavBar"
import HomePage from "./state-management/HomePage"
import AuthProvider from "./state-management/AuthProvider"
import TasksProvider from "./state-management/TasksProvider"

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  )
}

export default App
