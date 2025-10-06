import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Materi03 from "../materi-03/App";
import Materi04 from "../materi-04/App";
import Materi05 from "../materi-05/App";
import ProductDetail from "../materi-05/components/ProductDetail";

// Lazy import tiap materi
const Materi02 = lazy(() => import("../materi-02/App"));

export default function MateriRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/materi-02" element={<Materi02 />} />
        <Route path="/materi-03" element={<Materi03 />} />
        <Route path="/materi-04" element={<Materi04 />} />
        <Route path="/materi-05" element={<Materi05 />} />
        <Route path="/materi-05/:id" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
}
