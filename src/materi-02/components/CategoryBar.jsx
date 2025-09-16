import '../App.css'
import { useState } from "react";

export default function CategoryBar({ onFilter }) {
  const [active, setActive] = useState("all");
  const categories = ["all", "makanan", "minuman", "snack"];

  const handleClick = (category) => {
    setActive(category);
    onFilter(category);
  };

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => handleClick(cat)}
        >
          {cat === "all" ? "Semua" : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
