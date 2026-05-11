import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "../app/shared/layout/MainLayout";
import { lazy, Suspense } from "react";
import ScrollToTop from "../app/public/components/ScrollToTop";
import { Vigilante } from "../app/security/Vigilant";
import { InternalRoute } from "./InternalRoute";

const LazyError = lazy(() => import("../app/shared/Error"));
const LazyWelcome = lazy(() => import("../app/public/pages/Welcome"));
const LazyProducts = lazy(() => import("../app/public/pages/Products"));
const LazyPlane = lazy(() => import("../app/public/pages/Plane"));
const LazyLogin = lazy(() => import("../app/public/pages/Login"));


export const MainRoute = () => {
  return (
    <>
      {/* Se coloca aquí para que reaccione a cualquier cambio de ruta */}
      <ScrollToTop />

      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LazyWelcome />} />
            <Route path="productos" element={<LazyProducts />} />
            <Route path="products" element={<LazyProducts />} />
            <Route path="plan-de-gestion-it" element={<LazyPlane />} />
            <Route path="Plane" element={<LazyPlane />} />
            <Route path="plane" element={<LazyPlane />} />
            <Route path="login" element={<LazyLogin />} />
            <Route path="ingresar" element={<LazyLogin />} />
          </Route>
          <Route element={<Vigilante />}>
            <Route path="/dash/*" element={<InternalRoute />} />
          </Route>
          <Route path="*" element={<LazyError />} />
        </Routes>
      </Suspense>
    </>
  );
};