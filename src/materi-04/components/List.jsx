import '../App.css'
import pageImg from '../assets/empty.jpg'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTodo, deleteTodo } from "./todoSlice"
import { FaTrash, FaBriefcase, FaUser, FaMoneyBill, FaShoppingCart, FaBook } from "react-icons/fa"
import { formatDistanceToNow } from "date-fns"

export default function List() {
  const dispatch = useDispatch()
  const { items, search, filter } = useSelector((state) => state.todos);
  const [_timeNow, setTimeNow] = useState(Date.now())

  const categoryIcons = {
    work: <FaBriefcase />,
    personal: <FaUser />,
    finance: <FaMoneyBill />,
    shopping: <FaShoppingCart />,
    study: <FaBook />,
  };

  useEffect(() => {
    const interval = setInterval(() => setTimeNow(Date.now()), 30000)
    return () => clearInterval(interval)
  }, [])

  const filteredTodos = items.filter(todo => {
    const matchSearch = todo.text.toLowerCase().startsWith(search.toLowerCase());
    const matchCategory = filter === "all" || todo.category === filter;
    return matchSearch && matchCategory;
  });
  
  return (
    <div>
      {filteredTodos.length === 0 ? (
        <div className="empty-list">
          <img src={pageImg} alt="Pict To-do List"/><br/>
          Don't leave your to-do list empty!
        </div>
      ) : (
        <ul className='list'>
          {filteredTodos.map(todo => (
            <li key={todo.id} className='todo-item'>
              <div className='todo'>
                <span 
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  style={{textDecoration: todo.completed ? "line-through" : "none"}}
                >
                  {categoryIcons[todo.category]} {todo.text}
                </span>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  <FaTrash/>
                </button>
              </div>
              
              <span><small>
                  {formatDistanceToNow(new Date(todo.time), { addSuffix: true })}
                </small></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
