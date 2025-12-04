import React from "react";
import MainLayout from "../component/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "../component/Products/ProductListing";
import ProductDetails from "../component/Products/ProductDetails";
import Homepage from "../pages/Homepage";
import ProductsListingPage from "../pages/Products";

export const AppRouter: React.FC = () => {
  const mainLayout = <MainLayout />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={mainLayout}>
          <Route index element={<Homepage />} />
          <Route
            path={"/product-listing"}
            element={<ProductsListingPage />}
          />
          <Route
            path={"/product-details/:productId"}
            element={<ProductDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
