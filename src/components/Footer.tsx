import { type FilterValue } from '../types'
import { Filter } from './Filter'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}
export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filter filterSelected={filterSelected} onFilterSelected={() => { }} />
    </footer>
  )
}
