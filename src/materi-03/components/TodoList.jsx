import TodoItem from "./TodoItem"

export default function TodoList({list, onToggle}) {
  return (
        <ul className="list">
            {list.map((todo, index) => (
                <TodoItem 
                key={index}
                todo={todo}
                onToggle={() => onToggle(index)}
                />
            ))}
        </ul>
  );
}
