import '../App.css'
import { useState, useEffect } from "react";
import TodoList from './TodoList';

export default function TodoInput() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState(() => {
      const saved = localStorage.getItem("list");
      return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
      localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    function handleAdd(e) { 
      e.preventDefault()
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
    <div>
      <form className='inputTodo'>
        <input type="text" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
        placeholder="Add a new todo"/>
        <button type='submit' onClick={handleAdd}>Add Todo</button> 
      </form>
      <div>
        <h3>Previous Todos:</h3>
      <hr />
      </div>

      <TodoList list={list} onToggle={checklist}/>   
    </div>
  )
}
