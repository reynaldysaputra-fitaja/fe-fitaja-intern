import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { products } from "../data";

function Item({ products }) {
  const navigate = useNavigate();
  const handleClick =
    () => {navigate(`/materi-06/product/${products.id}`, { state: products });
    window.scrollTo(0, 0);
  }
  
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
      <AiOutlineHeart className="text-xl"/>
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

export default function Card({limit, showSearch = false}) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  
  const filtered = products.filter((p) =>
    p.name.toLowerCase().startsWith(search.toLowerCase())
  );

  const displayedProducts = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="p-5">
      {showSearch && (
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-500 p-2 w-150 focus-within:border-[#59F151] focus-within:outline focus-within:outline-[#59F151]
                transition-all duration-200"
          />
        </div>
      )}

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse">
          {[...Array(limit || 4)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <div className="bg-gray-300 h-60 w-full rounded-lg"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
              <div className="bg-gray-300 h-3 w-2/3 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProducts.map((p) => (
            <Item key={p.id} products={p} />
          ))}
        </div>
      )}
    </div>
  );
}
