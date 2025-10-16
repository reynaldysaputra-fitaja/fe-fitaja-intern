import Navigasi from "./Navigasi";
import Card from "./Card";
import Footer from "./Footer";
import sepatuHome from "../assets/sepatu-home.png"
import textHome from "../assets/text-home.png"
import glowInTheDark from "../assets/glow-in-the-dark.jpg"
import aura from "../assets/partner-aura.png"
import better from "../assets/partner-better.png"
import boncabe from "../assets/partner-boncabe.png"
import nanonano from "../assets/partner-nanonano.png"
import sunpride from "../assets/partner-sunpride.png"
import swallow from "../assets/partner-swallow.png"
import { FaRegArrowAltCircleLeft, FaTruck } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { animate, backOut, stagger } from "motion/react";

function Point({icon, title, desc}) {
  return (
    <div className="flex flex-row gap-3 md:p-2 lg:p-4 items-center mx-auto">
        <div className="bg-[#59F151] p-5 rounded-full md:text-xl lg:text-3xl">{icon}</div>
        <div>
          <span className="text-base lg:text-xl text-[#333333] font-semibold">{title}</span>
          <p className="text-sm text-[#333333] mt-2 w-50">{desc}</p>
        </div>
      </div>
  )
}
export default function Home() {
  const navigate = useNavigate();  

  useEffect(() => {
    animate(
      ".animasi",
      { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] },
      { duration: 0.8, delay: stagger(0.1), easing: backOut }
    );
  }, []);


  const handleClick = () => {
    navigate("/materi-06/listproduct");
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
      <Navigasi/>
      <div className="animasi">
      <div className="flex flex-row bg-black h-90 lg:h-160">
        <div className="text-white items-center my-auto mx-10 md:mr-80 md:ml-10 lg:mr-150">
          <div className="font-semibold mb-3 lg:mb-5 text-sm md:text-base lg:text-xl">Aerostreet Best Collections 2021</div>
          <h1 className="text-2xl lg:text-4xl font-bold mb-5 md:mb-8 lg:mb-10">INTERNASIONAL SPACE STATION (ISS)</h1>
          <p className="text-sm md:text-base lg:text-xl">Every day is a good day when you’re floating. 
            Your whole life your spend walking around Earth 
            and then all of a sudden you get to fly like you’ve dreamed of.</p>
          <div className="my-5 lg:my-10 mr-15 lg:mr-0">
            <button className="bg-[#59F151] w-25 p-2 text-sm text-black mr-5 lg:mr-10 mb-5">Shop Now</button><br className="block md:hidden"/>
            <button className="border-1 border-[#59F151] w-25 p-2 text-sm">Explore</button>
          </div>
        </div>
        <div className="absolute w-50 top-60 md:top-20 md:w-85 lg:w-150 right-0">
        <img src={textHome} className="absolute w-30 right-5 md:w-50 lg:w-100 md:right-10"></img>
        <img src={sepatuHome} className="absolute"></img>
        </div>
      </div>

      <div className="flex flex-col m-5 lg:m-15">
        <span className="font-bold text-base md:text-xl lg:text-3xl mb-3">NEW ARRIVAL</span>
        <Card limit={6}/>
        <button className="bg-[#59F151] w-20 p-2 my-3 text-sm"
        onClick={handleClick}>See All</button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-black ">
        <div className="p-15">
        <span className="text-[#59F151] text-xl lg:text-3xl font-bold">BEST COLLECTION </span>
        <span className="text-white text-xl lg:text-3xl font-bold">APPAREL<br/> 2021</span><br/>
        <span className="text-white text-base">Explore your gloomy day with 
          Glow In The Dark<br/> Series and get off </span>
        <span className="text-[#59F151] text-base">up to 50%</span>
        </div>
        <img className="w-50 md:mr-20 mb-10 md:mb-0" src={glowInTheDark}></img>
      </div>

      <div className="flex flex-wrap gap-3 mx-8 my-5 lg:my-15 justify-center">
      <Point 
      icon={<FaTruck/>}
      title={'Free and Fast Shipping'}
      desc={'Every single order ships for free and Fasthest shipping service'}
      />

      <Point 
      icon={<AiOutlineCreditCard/>}
      title={'Secure Payment'}
      desc={'Protected data and privacy'}
      />

      <Point 
      icon={<FaRegArrowAltCircleLeft/>}
      title={'Free Return'}
      desc={'Guaranteed return'}
      />
      </div>

      <div className="flex flex-col m-10 items-center">
        <span className="text-base sm:text-xl text-center font-bold">OUR BELOVED COLLABORATION PARTNERS</span>
        <div className="flex flex-wrap justify-center gap-5 my-10">
          <img className="w-15 lg:w-20" src={sunpride}></img>
          <img className="w-15 lg:w-20" src={swallow}></img>
          <img className="w-15 lg:w-20" src={boncabe}></img>
          <img className="w-15 lg:w-20" src={better}></img>
          <img className="w-15 lg:w-20" src={nanonano}></img>        
          <img className="w-15 lg:w-20" src={aura}></img>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  )
}
