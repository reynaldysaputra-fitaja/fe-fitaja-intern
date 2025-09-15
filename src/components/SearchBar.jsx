import '../App.css'

export default function SearchBar () {
    return (
        <form className="search">
            <input type="search" name="q" placeholder="Cari sesuatu..."/>
            <button type="submit">Cari</button>
        </form>
    )
}