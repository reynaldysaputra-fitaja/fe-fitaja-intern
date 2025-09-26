import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "./appSlice";
import { useState } from "react";

function Item({ id, brand, name, desc, rating, review, image}) {
  const dispatch= useDispatch()
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="w-90 md:w-200 lg:w-270 px-8 m-5 md:m-8 lg:m-10 mx-auto md:mx-auto lg:mx-auto shadow-lg rounded-4xl md:flex md:flex-row ">
      <span className="text-base flex-start rounded-xl text-gray-800 font-bold">0{id}</span>
      <div className="flex flex-row justify-center items-center ml-10 ">
        <span className="block md:hidden text-[#18A661] pr-10 font-bold text-3xl">{rating}</span>
        <img src={image} alt={name} className="w-45 md:w-55 lg:w-55 rounded-xl mb-3 lg:m-6"/>
      </div>
      <div className="md:flex md:flex-col md:justify-center lg:flex lg:flex-col lg:justify-center">
        <div className="w-auto flex flex-col-reverse md:flex-col md:px-5 lg:flex-col lg:px-5">
          <span className="font-bold text-gray-800">{brand} - {name}</span>
          <p className="line-clamp-2 md:line-clamp-2 lg:line-clamp-none text-gray-700">{desc}</p>
        </div>
      {showReview && (
          <p className="my-2 text-gray-600 italic md:px-5">{review}</p>
        )}
        </div>
      <div className="flex gap-5 md:gap-0 lg:gap-0 mx-3 md:grid lg:grid justify-center ">
        <span className="hidden md:block text-[#18A661] font-bold text-3xl md:text-2xl md:flex md:text-center md:justify-center nd:items-center">
          {rating}
        </span>
        <button className="w-60 h-8 md:w-30 bg-[#18A661] rounded-2xl my-3 md:my-1 text-white font-bold" 
          onClick={() => setShowReview(!showReview)}>
          {showReview ? "Hide Info" : "More Info"}
        </button>
        <button className="md:flex md:justify-center md:m-3" 
          onClick={() => dispatch(deleteProduct(id))}><FaTrash className="text-red-500 "/>
        </button>
      </div>
    </div>
  );
}

function Card() {
    const { products, search } = useSelector((state) => state.app);
    
    const filtered = products.filter(products => {
    const matchSearch = products.name.toLowerCase().startsWith(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div>
        {filtered.map((products) => (
            <Item 
            key={products.id}
            id={products.id}
            brand={products.brand}
            image={products.image}
            name={products.name}
            desc={products.desc}
            rating={products.rating}
            review={products.review}
            /> 
        ))}
    </div>
  )
}

export default Card
