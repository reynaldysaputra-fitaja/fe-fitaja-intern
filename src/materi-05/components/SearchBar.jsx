import { FaSearch } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../state/appSlice"
import { useState } from "react"
import { openForm } from "../state/uiSlice"
import { useGetPostsQuery } from "../state/api"
import Skeleton from "./Skeleton"

function SearchBar() {
  const dispatch = useDispatch()
  const [showSearch, setShowSearch] = useState(false)
  const { search } = useSelector(state => state.app)
  const { isLoading } = useGetPostsQuery();
  
  if (isLoading) {
    return (
      <div className="space-y-4 p-6">
        <Skeleton />
      </div>
    );
  }
  return (
    <div className="m-4 md:gap-3 flex flex-row justify-between md:mx-50">
        <img src='https://www.pngmart.com/files/23/Free-Logos-PNG-Isolated-HD.png' 
        className="size-10 flex items-center"/>
        {showSearch && (
          <form className="block md:hidden flex justify-center grow">
            <input name="input"
            className="p-2 rounded-2xl border-2 border-gray-500 grow mx-2" 
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
      <div className="flex flow-row">
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch className="text-gray-500 size-5 flex items-center mr-2 md:mr-5"/>
        </button>
        <button className="p-2 bg-[#18A661] hover:bg-green-800 rounded-2xl text-white font-bold w-15 " 
        onClick={() => dispatch(openForm())}>Add</button>
      </div>
    </div>
  )
}

export default SearchBar

