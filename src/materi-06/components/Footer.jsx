import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from "react-icons/fa"
import footer from "../assets/footer.png"

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <img className="w-full" src={footer}></img>
      <div className="flex flex-wrap justify-between gap-10 md:gap-0">
        <div className="px-10 md:pr-5 pt-5 flex flex-col gap-3">
            <span className="font-bold text-base md:text-xl">ABOUT US</span>
            <p className="text-sm lg:w-100">Aerostreet merupakan sebuah brand sepatu lokal yang 
                berbasis di Klaten, Jawa Tengah sejak 2015 lalu. 
                Dengan slogan “Now everyone can buy a good shoes.” Aerostreet 
                berusaha untuk menjual sepatu berkualitas dengan harga ramah di kantong.
            </p>
            <span className="text-sm">Get to know us better by following our social media!</span>
            <div className="flex flex-row gap-3"> 
                <button className="cursor-pointer"><FaTwitter/></button>
                <button className="cursor-pointer"><FaFacebook/></button>
                <button className="cursor-pointer"><FaInstagram/></button>
            </div>
        </div>

        <div className="px-10 md:px-10 md:pt-5 lg:px-0 flex flex-col gap-3">
            <span className="font-bold text-base md:text-xl">COMPANY</span>
            <span className="cursor-pointer">Karir</span>
            <span className="cursor-pointer">FAQ</span>
            <span className="cursor-pointer">Terms</span>
            <span className="cursor-pointer">Size Guide</span>
            <span className="cursor-pointer">Jurnal</span>

        </div>

        <div className="px-10 md:pl-10 md:pt-5 lg:px-10 lg:pr-5 flex flex-col gap-3">
            <span className="font-bold text-base md:text-xl">NEWSLETTER</span>
            <p className="text-sm md:w-90">Sign up to our newsletter and get 10% off your next purchase,
                as well as early access to coming collections.
            </p>
            <form className="flex flex-col gap-5 my-5">
                <input className="text-[#A3A3A3] border-1 p-3 text-sm w-60 md:w-70" placeholder="Enter your email address"/>
                <button className="bg-[#59F151] w-25 p-2 text-sm text-black mr-5 lg:mr-10 cursor-pointer">Subscribe</button>
            </form>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3 px-10 pb-5">
        <FaRegCopyright/> <span>Aerostreet</span>
      </div>
    </div>
  )
}
