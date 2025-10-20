import { Link } from "react-router-dom";
import Card from "./Card";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useEffect } from "react";
import { animate, backOut, stagger } from "motion/react";
import { useState } from "react";

export default function ListProduct() {
  useEffect(() => {
    animate(
      ".animasi",
      { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] },
      { duration: 0.8, delay: stagger(0.1), easing: backOut }
    );
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="animasi">
        <div className="p-10">
        <nav className="mb-10">
            <Link to="/materi-06/home">Home </Link> 
            / <span className="font-semibold font-medium">List Product</span>
        </nav>
        <div className="flex flex-row justify-between">
            <span className="text-xl md:text-3xl font-bold">BEST COLLECTION 2021</span>
            <button className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}>Sort By<AiOutlineArrowDown/></button>
            {open && (
              <div className="absolute bg-black/50 top-55 right-30 flex items-center justify-center">
                <ul className="flex flex-col gap-5 bg-white text-sm pl-5 py-5">
                <li><button>Category</button></li>
                <li><button>Name</button></li>
                <li><button>Price</button></li>
                </ul>
              </div>
            )}
        </div>
        <Card showSearch={true}/>
        </div>
      </div>
    </div>
  )
}
