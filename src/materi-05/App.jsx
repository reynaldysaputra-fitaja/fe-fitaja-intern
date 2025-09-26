import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import Card from "./components/Card"
import { useSelector } from "react-redux"
import AddProduct from "./components/AddProduct"

function Materi05() {
  const showForm = useSelector(state => state.ui.showAddForm)

  return (
    <div className="bg-white font-sans">
        <SearchBar />
        {showForm && <AddProduct/>}
        <Header />
        <Card />
    </div>
  )
}

export default Materi05
