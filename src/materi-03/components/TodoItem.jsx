export default function TodoItem({todo, onToggle}) {
  return (
    <li>
      <div className="todoList">
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={onToggle}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
          {todo.todo} <small>- {todo.time}</small>
        </span>
    </div>
    </li>
  )
}