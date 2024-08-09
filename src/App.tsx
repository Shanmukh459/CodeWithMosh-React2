import "./App.css"
import NavBar from "./state-management/NavBar"
import HomePage from "./state-management/HomePage"
import { TasksProvider } from "./state-management/tasks"
import AuthProvider from "./state-management/auth/AuthProvider"

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
