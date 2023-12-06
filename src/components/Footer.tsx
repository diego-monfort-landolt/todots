export const Footer: React.FC<Props> = ({ activeCount, todos, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>tareas pendientes
      </span>

      <Filter filterSelected={} onFilterSelected={() => {}} />
    </footer>
  )
}
