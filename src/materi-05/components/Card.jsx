import { FaPen, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useDeleteProductMutation, useGetPostsQuery } from "../service/api"
import Skeleton from "./Skeleton";
import { openForm } from "../state/appSlice";
import { useNavigate } from "react-router-dom";

function getRatingColor({rating}) {
  if (rating <= 4) return "text-red-500";
  if (rating <= 7) return "text-yellow-500";
  if (rating <= 10) return "text-[#18A661]";
}

function Item({ id, brand, name, description, rating, review, image_link}) {
  const dispatch= useDispatch()
  const [deleteProduct, {isLoading}] = useDeleteProductMutation()
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate();

  const handleEdit = () => {
    const product = { id, brand, name, description, rating, review, image_link };
    dispatch(openForm({ mode: "edit", data: product }));
  };

  const handleDelete = async () => { 
    setShowPopup(false)
    await deleteProduct(id)
  };

  return (
    <div className="w-90 md:w-200 lg:w-270 px-8 m-5 md:m-8 lg:m-10 mx-auto md:mx-auto lg:mx-auto shadow-lg rounded-4xl md:flex md:flex-row ">
      <span className="text-base flex-start rounded-xl text-gray-800 font-bold">0{id}</span>
      <div className="flex flex-row justify-center items-center ml-10 ">
        <div className="block md:hidden pr-10 font-bold text-3xl">
          <span className={getRatingColor({rating})}>{rating}</span>
        </div>
        <img src={image_link} alt={name} className="w-45 md:w-55 lg:w-55 rounded-xl mb-3 lg:m-6"/>
      </div>
      <div className="md:flex md:flex-col md:justify-center lg:flex lg:flex-col lg:justify-center">
        <div className="w-auto flex flex-col-reverse md:flex-col md:px-5 lg:flex-col lg:px-5">
          <span className="font-bold text-gray-800">{brand} - {name}</span>
          <p className="line-clamp-2 md:line-clamp-2 lg:line-clamp-none text-gray-700">{description}</p>
        </div>
      </div>
      <div className="flex gap-5 md:gap-0 lg:gap-0 mx-3 md:grid lg:grid justify-center ">
        <div className="hidden md:block font-bold text-3xl md:text-2xl md:flex md:text-center md:justify-center nd:items-center">
          <span className={getRatingColor({rating})}>
            {rating}
          </span>
        </div>
        <button className="w-50 h-8 md:w-30 bg-[#18A661] hover:bg-green-800 rounded-2xl my-3 md:my-1 text-white font-bold" 
          onClick={() => navigate(`/materi-05/${id}`)}>More Info
        </button>
        <div className="flex md:flex-row md:justify-center md:m-3 gap-5 md:gap-7">
          <button onClick={handleEdit}>
            <FaPen className="text-gray-500 "/>
          </button>
          <button onClick={() => dispatch(setShowPopup(true))}
            ><FaTrash className="text-red-500 "/>
          </button>
          {isLoading && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                <img className="w-15 md:w-30 mx-auto" src="https://i.gifer.com/ZKZg.gif"/>
              </div>
            )}
          {showPopup && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white max-w-md rounded-xl text-center">
                  <h3 className="m-5">Do you want to delete {name}?</h3>
                  <button className="w-30 h-8 bg-red-400 hover:bg-red-500 rounded-2xl mb-5 mx-3 text-white font-bold" 
                    onClick={handleDelete}>
                    Yes</button>
                  <button className="w-30 h-8 bg-white text-red-400 border-[1px] font-bold hover:bg-red-500 hover:text-white rounded-2xl mb-5 " 
                    onClick={() => dispatch(setShowPopup(false))}>
                    Cancel</button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

function Card() {
    const { search } = useSelector((state) => state.app);
    const { data } = useGetPostsQuery();
    const products = data || [];

    const { isLoading } = useGetPostsQuery();
    if (isLoading) {
      return (
        <div className="space-y-4 p-6">
          <Skeleton />
        </div>
      );
    }

  return (
    <div>
      {products.length === 0 ? (
        <div className="flex flex-col items-center">
          <img className="w-25 md:w-30 lg:w-35 mt-30" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/empty-folder-4049425-3351756.png" alt="Empty"/><br/>
          There's no product now...
          </div> ) : (
          <div>
            {products.filter((p) => p.name.toLowerCase().startsWith(search.toLowerCase())).map((p) => (
              <Item 
                key={p.id}
                id={p.id}
                brand={p.brand}
                image_link={p.image_link}
                name={p.name}
                description={p.description}
                rating={p.rating}
                review={p.review}
              /> 
            ))}
          </div>
      )}
    </div>
  )
}

export default Card
