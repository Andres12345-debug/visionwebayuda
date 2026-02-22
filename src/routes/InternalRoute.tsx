import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "../app/public/components/ScrollToTop";
import { Boardboard } from "../app/private/pages/Boardboard";

const LazyError = lazy(() => import("../app/shared/Error"));
const LazyProfile = lazy(() => import("../app/private/pages/Profile"));

export const InternalRoute = () => {
  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>

          {/*  IMPORTANTE: sin /dash */}
          <Route element={<Boardboard />}>

            {/* /dash */}
            <Route index element={<LazyProfile />} />

            {/* /dash/profile */}
            <Route path="profile" element={<LazyProfile />} />

          </Route>

          <Route path="*" element={<LazyError />} />

        </Routes>
      </Suspense>
    </>
  );
};