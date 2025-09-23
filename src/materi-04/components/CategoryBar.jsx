import '../App.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "./todoSlice"

export default function CategoryBar() {
  const dispatch = useDispatch()
  const [active, setActive] = useState("all")

  const categories = ["all", "work", "personal", "finance", "shopping", "study"]

  const handleClick = (category) => {
    setActive(category)
    dispatch(setFilter(category))
  }
    
  return (
    <div className="cat-bar">
        {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => handleClick(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  )
}
