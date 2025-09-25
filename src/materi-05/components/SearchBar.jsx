import { FaSearch } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "./appSlice"
import { useState } from "react"

function SearchBar() {
  const dispatch = useDispatch()
  const [showSearch, setShowSearch] = useState(false)
  const { search } = useSelector(state => state.app)

  return (
    <div className="m-6 flex md:gap-5 justify-between md:justify-start md:mx-65">
        <img src='https://www.pngmart.com/files/23/Free-Logos-PNG-Isolated-HD.png' 
        className="size-10"/>
        {showSearch && (
          <form className="block md:hidden flex justify-center grow">
            <input name="inputform"
            className="p-2 rounded-2xl border-2 border-gray-500 grow mx-5" 
            placeholder="Search for anything"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}/>
          </form>
        )}
        <form className="hidden md:block md:flex grow">
          <input name="input"
          className="p-2 rounded-2xl border-2 border-gray-500 grow" 
          placeholder="Search for anything"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}></input>
        </form>
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch className="text-gray-500 m-2 "/>
          </button>
    </div>
  )
}

export default SearchBar

