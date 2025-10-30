import { useSelector, useDispatch } from "react-redux";
import Navigasi from "./Navigasi";
import Item from "./Item";
import { removeFromSave } from "../state/saveProductSlice";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Footer from "./Footer";

export default function SaveProduct() {
  const itemSaved = useSelector((state) => state.savedProduct.itemSaved);
  const dispatch = useDispatch();

  const handleRemove = (itemSaved) => {
    const confirmDelete = window.confirm("Do you want to remove from the wishlist?");
    if (confirmDelete) {
      dispatch(removeFromSave({ id: itemSaved.id }));
      toast.info("Product removed from saved list.");
    }
  }
  
  return (
    <div>
      <Navigasi/>
      <div className="p-10">
        <h1 className="text-lg md:text-xl font-bold mb-5">YOUR WISHLIST</h1>

        {itemSaved.length === 0 ? (
          <p className="text-center m-20">No saved products yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {itemSaved.map((itemSaved) => (
                <div key={itemSaved}>
                <button
                  onClick={() => handleRemove(itemSaved)}
                  className="absolute text-red-500 px-10 cursor-pointer"
                  >
                    <FaTrash/>
                  </button>
                <Item key={itemSaved} products={itemSaved}/>
              </div>
              ))}
            </div>
          )}
      </div>
      <Footer/>
    </div>
  )
}
