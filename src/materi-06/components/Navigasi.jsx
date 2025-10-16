import logoImg from "../assets/logo.png"
import { FaCartArrowDown } from "react-icons/fa"
import { AiOutlineBars, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../state/authSlice";

export default function Navigasi() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navMobile, setNavMobile] = useState(false);
  const [profile, setProfile] = useState(false);
  const { isLogin, user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/materi-06/login");
  }

  return (
    <nav className="flex flex-row justify-between shadow-xl h-15 lg:h-20">
        <div className="flex flex-row gap-2 md:gap-5 items-center">
        <button className="block md:hidden relative text-xl ml-5"
          onClick={() => setNavMobile((prev) => !prev)}><AiOutlineBars/>
        </button>

        {navMobile && (
          <div className="absolute bg-black/50 top-13 flex items-center justify-center">
            <ul className="flex flex-col gap-5 bg-white font-bold pl-5 pr-25 py-5">
              <li onClick={() => navigate("/materi-06/home")}>HOME</li>
              <li onClick={() => navigate("/materi-06/listproduct")}>PRODUCTS</li>
              <li>COLLABORATION</li>
              <li>CONTACT US</li>
            </ul>
        </div>
        )}

        <img className="w-8 md:w-10 ml-3 mr-0 md:ml-8 md:my-5" src={logoImg}></img>
        <div className="hidden md:block">
            <ul className="flex flex-row gap-5 font-bold md:text-sm lg:text-base">
              <li onClick={() => navigate("/materi-06/home")}>HOME</li>
              <li onClick={() => navigate("/materi-06/listproduct")}>PRODUCTS</li>
              <li>COLLABORATION</li>
              <li>CONTACT US</li>
            </ul>
        </div>
        </div>
        <div className="flex flex-row gap-3 lg:gap-7 items-center mx-5 text-xl lg:text-2xl">
            <FaCartArrowDown />
            <AiOutlineHeart />
            {isLogin ? 
            (<button className="text-2xl lg:text-3xl font-semibold mr-2"
            onClick={() => setProfile((prev) => !prev)}>
                {user?.email || <AiOutlineUser/>}
            </button>
            ) : (
            <button className="bg-black/80 text-white text-sm lg:text-base font-semibold p-2 px-5 m-2" 
            onClick={() => navigate("/materi-06/login")}>Login</button>)
            }

            {profile && (
              <div className="absolute z-50 top-13 lg:top-15 right-0 flex items-center justify-center">
                <ul className="flex flex-col gap-5 bg-white text-sm md:text-base pl-5 pr-20 py-5 rounded-xl">
                <li><button className="cursor-pointer">Profile</button></li>
                <li><button className="cursor-pointer" onClick={handleLogout}>Log Out</button></li>
                </ul>
              </div>
            )}
        </div>
    </nav>
  )
}
