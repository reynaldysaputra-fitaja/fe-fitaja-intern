import '../App.css'
import { useDispatch } from "react-redux"
import { setFilter } from "./todoSlice"

export default function CategoryBar() {
    const dispatch = useDispatch()
    
  return (
    <div className="cat-bar">
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("work"))}>Work</button>
        <button onClick={() => dispatch(setFilter("personal"))}>Personal</button>
        <button onClick={() => dispatch(setFilter("finance"))}>Finance</button>
        <button onClick={() => dispatch(setFilter("shopping"))}>Shopping</button>
        <button onClick={() => dispatch(setFilter("study"))}>Study</button>
    </div>
  )
}
