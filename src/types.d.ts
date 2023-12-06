export interface Todo {
  id: string
  title: string
  completed: boolean
}
export type TodoId = Pick<TodoId, 'id'>
export type TodoTitle = Pick<TodoTitel, 'title'>
export type TodoCompleted = Pick<TodoCompleted, 'completed'>

export type ListOfTodos = Todo[]
