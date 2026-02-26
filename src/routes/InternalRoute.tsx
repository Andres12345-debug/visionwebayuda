import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "../app/public/components/ScrollToTop";
import { Boardboard } from "../app/private/pages/Boardboard";

const LazyError = lazy(() => import("../app/shared/Error"));
const LazyProfile = lazy(() => import("../app/private/pages/Profile"));
const LazyDashboard = lazy(() => import("../app/private/pages/dashborad"));

export const InternalRoute = () => { 
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {/* El Layout Boardboard envuelve todo */}
          <Route path="/" element={<Boardboard />}>
            {/* Index: Lo primero que sale es el Dashboard */}
            <Route index element={<LazyDashboard />} />

            {/* Perfil: Se activa al ir a /dash/profile */}
            <Route path="profile" element={<LazyProfile />} />

            {/* Manejo de errores internos */}
            <Route path="*" element={<LazyError />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
