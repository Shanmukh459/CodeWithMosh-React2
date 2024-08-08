interface Task {
  id: number
  title: string
}

interface AddTask {
  task: Task
  type: "ADD"
}

interface DeleteTask {
  taskId: number
  type: "DELETE"
}

type TaskAction = AddTask | DeleteTask
const tasksReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks]
    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskId)
  }
}

export default tasksReducer
