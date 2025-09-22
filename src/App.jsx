import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MateriRoutes from "./router/MateriRoutes";

function HomeNav() {
  const location = useLocation();
  if (location.pathname !== "/") return null; // hanya render di halaman "/"

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Link to="/materi-02">Materi 02</Link>
      <Link to="/materi-03">Materi 03</Link>
      <Link to="/materi-04">Materi 04</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HomeNav />

      <Routes>
        <Route path="/*" element={<MateriRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
