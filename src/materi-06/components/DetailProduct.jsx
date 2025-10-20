import { FaCheckCircle, FaFacebookF, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import { animate, easeInOut, stagger } from "motion/react";

export default function DetailProduct({addToCart}) {
  const location = useLocation();
  const products = location.state;
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [showPopupSave, setShowPopupSave] = useState(false);
  const [selectedSize, setSelectedSize] = useState();

  const handleAdd = () => {
    addToCart(products, selectedSize);
    setShowPopupAdd(true);
    setTimeout(() => {setShowPopupAdd(false);}, 1000);
  }

  const handleSave = () => {
    setShowPopupSave(true);
    setTimeout(() => {setShowPopupSave(false);}, 1000);
  }

  useEffect(() => {
    animate(
      ".animasi",
      { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] },
      { duration: 0.8, delay: stagger(0.1), easing: easeInOut }
    );
  }, []);

  return (
  <div className="animasi">
    <div className="mx-10 lg:mx-15 my-10">
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-30">
        <img className="w-50 md:w-90 lg:w-120 mx-auto hover:shadow-xl hover:-translate-y-2 transition duration-300" src={products.image}></img>
        <div className="flex flex-col">
          <span className="text-md md:text-base lg:text-xl font-bold">{products.category}</span>
          <span className="text-sm md:text-md lg:text-base">{products.name}</span>
          <span className="text-sm md:text-md lg:text-base font-bold">{products.price}</span>
          <p className="text-sm md:text-md lg:text-base my-5">{products.desc}</p>
          <span className="text-sm md:text-md lg:text-base font-bold">Size</span>
          <div className="flex gap-2 mt-3">
            {products.sizes.map((sizes) => (
              <button
              key={sizes}
              onClick={() => setSelectedSize(sizes)}
              className={`cursor-pointer border border-gray-500 px-3 py-1 hover:bg-[#59F151]
                ${ selectedSize === sizes ? "bg-[#59F151]" : "" }`}
              >
                {sizes}
              </button>
            ))}
          </div>
          <button className="cursor-pointer bg-[#59F151] hover:bg-green-400 p-2 my-3"
          onClick={handleAdd}>Add to Cart</button>
          <button className="cursor-pointer border-2 border-[#59F151] hover:bg-green-400 hover:border-green-400 p-2"
          onClick={handleSave}>Save Product</button>
          <div className="flex gap-1 my-3 items-center">
            <button className="cursor-pointer font-bold mr-2">Share</button>
            <button className="cursor-pointer"><FaTwitter/></button>
            <button className="cursor-pointer"><FaFacebookF/></button>
            <button className="cursor-pointer"><FaInstagram/></button>
          </div>
          {showPopupAdd && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white max-w-md rounded-xl text-center">
                <h3 className="m-5">Product added to cart!</h3>
                <img className="w-40 m-5 m-auto" src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"/> <br/>
              </div>
            </div>
          )}
          {showPopupSave && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white max-w-md rounded-xl text-center">
                <h3 className="m-5">Product saved successfully!</h3>
                <img className="w-40 m-5 m-auto" src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"/> <br/>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-base md:text-xl font-bold mb-3">SPECIFICATION</div>
      <div className="pl-5 md:pl-10 text-sm">
        {products.spec.map((spec) => (
              <span
                key={spec}
                className="flex items-center gap-3 mb-2"
              >
              <FaCheckCircle className="text-xs"/>{spec}
              </span>
            ))}
      </div>
      <hr className="w-3/4 my-10"/>
      <div className="flex flex-row items-center justify-between mb-3">
        <span className="text-base md:text-xl font-bold">REVIEW</span>
        <span className="flex items-center gap-2 text-xs md:text-base"><FaStar className="text-yellow-500"/>({products.rating}/5)</span>
      </div>
      <div className="flex gap-5">
        <span className="text-sm">Grey Stainfold</span>
        <span className="text-sm text-gray-500">|  14 May 2021</span>
      </div>
        <span><FaStar className="text-yellow-500 my-5"/></span>
        <p className="text-md">{products.review}</p>
        <button className="bg-[#59F151] p-2 px-5 my-3 text-sm cursor-pointer">Write Review</button>
      <hr className="w-3/4 my-10"/>
        <span className="text-base md:text-xl font-bold">SIMILAR</span>
        <Card limit={3} addToCart={addToCart}/>
    </div>
  </div>
  )
}
