import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTER } from './consts'
import { Footer } from './components/Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTER.ALL)

  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCound = todos.length - activeCount

  return (
    <>
      <div className='todoapp'>
        <h1>Todoo.</h1>
        <Todos onToggleCompleteTodo={handleCompleted} onRemoveTodo={handleRemove} todos={todos} />
        <Footer activeCount={activeCount}
        completedCount={completedCound}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange} />
      </div>
    </>
  )
}
export default App
