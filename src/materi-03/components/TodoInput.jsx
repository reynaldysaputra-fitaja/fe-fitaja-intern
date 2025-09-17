import '../App.css'
import { useState } from "react";
import TodoList from './TodoList';

export default function TodoInput() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    function handleAdd() { 
        if (todo !== "") {
            setList([...list, { todo, completed: false, time: new Date().toString()}]);
            setTodo("");
        }
    }

    function checklist(index) {
        const newTodo = [...list];
        newTodo[index].completed = !newTodo[index].completed;
        setList(newTodo);
    }
    
  return (
    <div className='inputTodo'>
      <input type="text" 
      value={todo} 
      onChange={(e) => setTodo(e.target.value)} 
      placeholder="Add a new todo"/>
      <button onClick={handleAdd}>Add Todo</button> 
      <div>
        <h3>Previous Todos:</h3>
      <hr />
      </div>

      <TodoList list={list} onToggle={checklist}/>   
    </div>
  )
}
