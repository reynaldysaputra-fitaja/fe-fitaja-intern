import earthAngelHitam from "../assets/earth-angel-hitam.png";
import scooterHitam from "../assets/scooter-hitam.png";
import fallenAngelHitam from "../assets/fallen-angel-hitam.png"
import crewneckLokkoBlack from "../assets/crewneck-lokko-black.jpg"
import streetwearSkate from "../assets/streetwear-skate-black.jpg"
import fontUrbanBlack from "../assets/font-urban-black.jpg"
import shirtLokkoBlack from "../assets/shirt-lokko-black.jpg"
import yunaniAngelBlack from "../assets/yunani-angel-black.jpg"
import hoodieAlexanderBlack from "../assets/hoodie-alexander-black.jpg"
import roseNaturalGreen from "../assets/rose-Natural-Green.jpg"
import rinGreyTosca from "../assets/rin-Grey-Tosca.jpg"
import cutSilver from "../assets/cut-Silver.jpg"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

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

  const products = [
    {
      id: 1,
      image: earthAngelHitam,
      category: "T SHIRT OVERSIZE",
      name: "Earth Angel Hitam",
      price: "Rp 119.800",
      discount: 50,
      discountprice: "Rp 59.900",
      desc: "Oversized T-shirt made from premium cotton that feels soft and lightweight, providing maximum comfort all day long.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"],
      rating: 4.5,
      review: "The silver aerostreet is cool and arrived intact and flawless. And also the choice of silver color is very classic. Awesome!!"
    },
    {
      id: 2,
      image: scooterHitam,
      category: "COACH JACKET",
      name: "Scooter Hitam",
      price: "Rp 299.800",
      discount: 50,
      discountprice: "Rp 149.900",
      desc: "Cozy fleece hoodie designed to keep you warm and comfortable. Perfect for lounging or outdoor activities.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]
    },
    {
      id: 3,
      image: fallenAngelHitam,
      category: "T SHIRT",
      name: "Fallen Angel Hitam",
      price: "Rp 119.800",
      discount: 0,
      discountprice: null,
      desc: "Oversized T-shirt made from premium cotton that feels soft and lightweight, providing maximum comfort all day long.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]
    },
    {
      id: 4,
      image: crewneckLokkoBlack,
      category: "CREWNECK",
      name: "Lokko Black",
      price: "Rp 259.800",
      discount: 50,
      discountprice: "Rp 129.900",
      desc: "Classic crewneck sweatshirt made from thick, soft cotton for a warm and comfy feel. Regular fit that’s great for everyday wear.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]
    },
    {
      id: 5,
      image: streetwearSkate,
      category: "T SHIRT",
      name: "Streetwear Skate Black",
      price: "Rp 119.800",
      discount: 50,
      discountprice: "Rp 59.900",
      desc: "Oversized T-shirt made from premium cotton that feels soft and lightweight, providing maximum comfort all day long.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]
    },
    {
      id: 6,
      image: fontUrbanBlack,
      category: "T SHIRT",
      name: "Font Urban Black",
      price: "Rp 119.800",
      discount: 50,
      discountprice: "Rp 59.900",
      desc: "Oversized T-shirt made from premium cotton that feels soft and lightweight, providing maximum comfort all day long.",
      sizes: ["S", "M", "L", "XL", "XXL"]  ,
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]

    },
    {
      id: 7,
      image: shirtLokkoBlack,
      category: "T SHIRT",
      name: "Lokko Black",
      price: "Rp 119.800",
      discount: 50,
      discountprice: "Rp 59.900",
      desc: "Oversized T-shirt made from premium cotton that feels soft and lightweight, providing maximum comfort all day long.",
      sizes: ["S", "M", "L", "XL", "XXL"] ,
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]

    },
    {
      id: 8,
      image: yunaniAngelBlack,
      category: "T SHIRT",
      name: "Yunani Angel Black",
      price: "Rp 119.800",
      discount: 50,
      discountprice: "Rp 59.900",
      desc: "Oversized T-shirt made from premium cotton that feels soft and lightweight, providing maximum comfort all day long.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]

    },
    {
      id: 9,
      image: hoodieAlexanderBlack,
      category: "HOODIE",
      name: "Alexander Black",
      price: "Rp 279.800",
      discount: 50,
      discountprice: "Rp 139.900",
      desc: "Cozy fleece hoodie designed to keep you warm and comfortable. Perfect for lounging or outdoor activities.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]

    },
    {
      id: 10,
      image: roseNaturalGreen,
      category: "ROSE",
      name: "Natural Green",
      price: "Rp 259.800",
      discount: 0,
      discountprice: null,
      desc: "Guaranteed not to be damaged easily because it is produced with the latest Shoes Injection Mold technology.",
      sizes: [37, 38, 39, 40, 41, 42, 43, 44],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]
    },
    {
      id: 11,
      image: rinGreyTosca,
      category: "RIN",
      name: "Grey Tosca",
      price: "Rp 259.800",
      discount: 0,
      discountprice: null,
      desc: "Guaranteed not to be damaged easily because it is produced with the latest Shoes Injection Mold technology.",
      sizes: [37, 38, 39, 40, 41, 42, 43, 44],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]
    },
    {
      id: 12,
      image: cutSilver,
      category: "SPACE HIGH",
      name: "Cut Silver",
      price: "Rp 259.800",
      discount: 0,
      discountprice: null,
      desc: "Guaranteed not to be damaged easily because it is produced with the latest Shoes Injection Mold technology.",
      sizes: [37, 38, 39, 40, 41, 42, 43, 44],
      spec: ["Regular fit", "Upper dengan konstruksi mesh", "Outsole berbahan kulit sintesis", "Menggunakan tali sepatu", "Free 1 pair Insole by Aerostreet"]

    }
  ];

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
