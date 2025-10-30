import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Item({ products }) {
  const navigate = useNavigate();
  const handleClick =
    () => {navigate(`/materi-06/product/${products.id}`, { state: products });
    window.scrollTo(0, 0);
  }
  const itemSaved = useSelector((state) => state.savedProduct.itemSaved);
  const isSaved = itemSaved.some(item => item.id === products.id);
  
  return (
    <div className="flex flex-col p-10 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer" 
      onClick={handleClick}>
      {products.discount > 0 && (
        <div className="absolute bg-red-500 text-white font-bold text-xs px-2 py-4 rounded-full self-end mb-2">
          -{products.discount}%
        </div>
      )}

      <img
        className="w-80 h-60 object-cover mb-3 rounded-lg"
        src={products.image}
        alt={products.name}
      />

      <span className="text-base font-bold mb-1">{products.category}</span>
      <div className="flex flex-row justify-between">
      <span className="text-sm mb-2">{products.name}</span>
      <AiFillHeart className={`text-xl ${ isSaved ? "fill-[#59F151]" : "fill-gray-400" }`}/>
      </div>

      {products.discount > 0 ? (
        <div className="flex justify-between gap-3">
          <span className="line-through">{products.price}</span>
          <span className="text-red-500 font-bold">{products.discountprice}</span>
        </div>
      ) : (
        <span className="text-black">{products.price}</span>
      )}
    </div>
  );
}
