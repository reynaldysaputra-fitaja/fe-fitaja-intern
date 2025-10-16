import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, login, register, clearMessages } from "../state/authSlice";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { animate, spring } from "motion/react"
import bgdesktopImg from "../assets/bg-desktop.png"
import bgmobileImg from "../assets/bg-mobile.png"
import logoImg from "../assets/logo.png"

const AuthForm = ({ mode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, success, email, password } = useSelector((state) => state.auth);
  const [confirmPass, setConfirmPass] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isRegister = mode === "register";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      dispatch(register({ email, password }));
      console.log("Email: ", email);
      console.log("Password :", password);
      setIsLoading(true);
      setTimeout(() => {
        navigate("/materi-06/login");
        dispatch(clearMessages());
      }, 1500);
    } else {
      dispatch(login({ email, password }));
      console.log("Email: ", email);
      console.log("Password :", password);
      setIsLoading(true);
      setTimeout(() => {
        navigate("/materi-06/home");
        dispatch(clearMessages());
      }, 1500);
    }
  };
  
  useEffect(() => {
    animate(
      ".auth-form",
      { opacity: [0, 1], y: [-20, 0] },
      { duration: 1, easing: spring() }
    );
  }, []);

  return (
        <div className=" auth-form lg:flex lg:flex-row h-[100vh]">
        <img src={bgdesktopImg} className="hidden lg:block lg:w-1/2 lg:h-full items-center justify-center"/>
        <img src={bgmobileImg} className="block lg:hidden md:w-full justify-center"/>
        
        <div className="flex flex-col w-full lg:w-1/2 items-center justify-center bg-white rounded-3xl">
        <img className="w-10 md:w-15 m-2" src={logoImg}></img>
        <h2 className="text-2xl font-bold">
            {isRegister ? "Welcome" : "Welcome Back"}
        </h2>
        <p className="text-sm mb-4 text-center">
            {isRegister ? "Register to make your account below" : "Sign in to your account below"}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
            <label className="flex flex-col gap-2">Email
            <div
            className={`flex flex-row items-center border p-3 text-sm
                ${email.length > 0 && !emailRegex.test(email) ? "border-red-500" : "border-gray-300"}
                focus-within:border-[#59F151] focus-within:outline focus-within:outline-[#59F151]
                transition-all duration-200`}
            >
            <input
                type="email"
                id="emailuser"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                className="w-full bg-transparent outline-none"
            />
            </div>
            </label>

            {email.length > 0 && !emailRegex.test(email) && (
            <p className="text-red-500 text-sm">Invalid format email</p>
            )}

            <label className="flex flex-col gap-2">Password
            <div
            className={`flex flex-row items-center border p-3 text-sm
                transition-all duration-200
                ${password.length > 0 && password.length < 6 ? "border-red-500" : "border-gray-300"}
                focus-within:border-[#59F151] focus-within:outline focus-within:outline-[#59F151]`}
            >
            <input
                type={showPassword ? "text" : "password"}
                id="passworduser"
                placeholder={isRegister ? "Password (min. 6  characters)" : "Enter your password"}
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                minLength={6}
                required
                className="w-full bg-transparent outline-none"
            />
            {showPassword ? (
                <AiFillEye onClick={() => setShowPassword(false)} className="cursor-pointer" />
            ) : (
                <AiFillEyeInvisible onClick={() => setShowPassword(true)} className="cursor-pointer" />
            )}
            </div>
            </label>
            {password.length > 0 && password.length < 6 && (
            <p className="text-red-500 text-sm">Password must be at least 6 characters</p>
            )}

            {isRegister && (
            <>
                <label className="flex flex-col gap-2">Confirm Password
                <div
                className={`flex flex-row items-center border p-3 text-sm
                    transition-all duration-200
                    ${confirmPass.length > 0 && confirmPass !== password ? "border-red-500" : "border-gray-300"}
                    focus-within:border-[#59F151] focus-within:outline focus-within:outline-[#59F151]`}
                >
                <input
                    type={showConfirm ? "text" : "password"}
                    id="confirmpassword"
                    placeholder="Confirm your password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                    className="w-full bg-transparent outline-none"
                />
                {showConfirm ? (
                    <AiFillEye onClick={() => setShowConfirm(false)} className="cursor-pointer" />
                ) : (
                    <AiFillEyeInvisible onClick={() => setShowConfirm(true)} className="cursor-pointer" />
                )}
                </div>
                </label>
                {confirmPass.length > 0 && confirmPass !== password && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
                )}
            </>
            )}

            <div className="flex gap-2"><input type="checkbox"/><span>Remember Me</span></div>
           
            <button
            type="submit"
            disabled={password.length < 6 || (isRegister && confirmPass !== password)}
            className="bg-[#59F151] py-2 mt-3 hover:bg-green-500 disabled:bg-gray-300 disabled:text-gray-800"
            >
            {isRegister ? "Register" : "Login"}
            </button>
        </form>

        {isRegister ?  (<div className="m-5">Already have an account? 
        <span className="font-semibold text-green-500"
        onClick={() => navigate("/materi-06/login")}> Login here</span></div>) 
        : (<div className="m-5">Don't have an account? 
          <span className="font-semibold text-green-500" 
          onClick={() => navigate("/materi-06/register")}> Register here</span></div>)}

        {error && <p className="text-red-500 mt-3">{error}</p>}
        {success && <p className="text-green-600 mt-3">{success}</p>}
        </div>

        {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center rounded-xl">
          <img className="w-15 md:w-20 mx-auto" src="https://i.gifer.com/ZKZg.gif"/>
        </div>
        )}

        
    </div>
  );
};

export default AuthForm;
