import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Learning JavaScript',
    completed: true
  },
  {
    id: '2',
    title: 'Learning TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learing Backend',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <div className='todoapp'>
        <h1>Todoo.</h1>
        <Todos onRemoveTodo={handleRemove} todos={todos} />
      </div>

    </>
  )
}

export default App
