import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center font-bold">
        <h6>404 Error</h6>
        <p>Oops! The page you're looking for does not exist.</p>
        <button onClick={() => navigate(`/materi-05`)} className="w-35 h-10 rounded-xl bg-[#18A661] hover:bg-green-800 text-white rounded-5xl m-5">Back to Home</button>
    </div>
  )
}
