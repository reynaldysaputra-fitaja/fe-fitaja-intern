import '../App.css'
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "./todoSlice"
import { openForm } from "./uiSlice"

export default function SearchBar() {
  const dispatch = useDispatch()
  const { search } = useSelector(state => state.todos)

  return (
    <div className='search-add'>
      <form className="search">
        <input 
          type="text" 
          placeholder="Search for todos"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </form>
      <button className='add' onClick={() => dispatch(openForm())}>+ Add</button>
    </div>
  )
}
