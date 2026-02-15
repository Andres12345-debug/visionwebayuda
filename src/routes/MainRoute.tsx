import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../app/shared/layout/MainLayout";
import { lazy } from "react";

const LazyError = lazy(() => import("../app/shared/Error"));
const LazyWelcome = lazy(() => import("../app/public/pages/Welcome"));
const LazyProducts = lazy(() => import("../app/public/pages/Products"));

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LazyWelcome />} />
        <Route path="products" element={<LazyProducts />} />
      </Route>
      <Route path="*" element={<LazyError />} />
    </Routes>
  );
};
