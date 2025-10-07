import { useNavigate, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../service/api";
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft, FaCheck, FaStar } from "react-icons/fa";
import PageNotFound from "./PageNotFound";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      data: data?.find((p) => p.id.toString() === id),
      isLoading,
    }),
  });
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-100">
        <img
          src="https://i.gifer.com/ZKZg.gif"
          alt="Loading"
          className="w-25 h-25"
        />
      </div>
    );
  }

  const descriptionPoints = product?.description.split(".").map((point) => point.trim()).filter((point) => point.length > 0);

  if (!product) return <PageNotFound />;

  const rating = product.rating;

  return (
    <div className="flex flex-col gap-2 mx-25 my-10">
      <button onClick={() => navigate(`/materi-05`)} ><FaArrowLeft/></button>
      <div className="w-10 bg-yellow-500 text-white font-bold rounded-xl text-center mt-3 lg:">0{product.id}</div>
      <div className="md:flex md:flex-row-reverse md:justify-end md:mt-5">
        <img src={product.image_link} alt={product.name} className="w-64 my-4 mx-auto lg:mr-5 rounded-2xl" />
        <div className="md:w-180 gap-0">
          <span className="text-gray-500 text-base">{product.brand}</span>
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <span className="flex flex-row items-center gap-2 text-green-600 text-xl font-bold mt-3"><FaStar className="text-yellow-500"/>{product.rating}</span>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-700">
        {descriptionPoints.map((point, idx) => (
          <li key={idx} className="flex items-center gap-2 "><FaCheck className="w-3 h-3 text-blue-500"/>{point}</li>
        ))}
      </ul>
      <div className="bg-gray-200 rounded-2xl shadow-lg p-6 my-3">
        <div className="flex flex-row justify-between mb-3 ">
          <span className="flex">{[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < Math.round(rating/2) ? "gold" : "lightgray"} />))}
          </span>
          <div className="flex gap-2">
            <button><FaArrowCircleLeft/></button>
            <button><FaArrowCircleRight/></button>
          </div>
        </div>
        <p className="line-clamp-2 md:line-clamp-2 lg:line-clamp-none">"{product.review}"</p>
      </div>
      <button className="w-80 h-10 md:w-50 bg-[#18A661] hover:bg-green-800 rounded-3xl my-3 md:my-1 text-white font-bold mx-auto text-md md:mx-0">
        View Product
      </button>
    </div>
  )
}
