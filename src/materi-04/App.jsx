import './App.css'
import { useSelector } from "react-redux"
import List from './components/List'
import AddForm from './components/AddForm'
import SearchBar from './components/SearchBar'
import CategoryBar from './components/CategoryBar'

function Materi04() {
    const showForm = useSelector(state => state.ui.showAddForm)

  return (
    <div className="page">
        <h1>Todos App</h1>
        <div>
            <SearchBar />
            <CategoryBar />
            {showForm && <AddForm />}
            <List />
        </div>
        
    </div>
  )
}

export default Materi04
