import React from "react";
import HomepageBanner from "../HomepageBanner/HomepageBanner";
import ProductListing from "../Products/ProductListing";
import "./HomepageComponent.scss";
import ProductCategory from "../Products/ProductCategory";
import { Divider } from "antd";

const HomepageComponent = () => {
  return (
    <div className="homepage-wrapper">
      <div className="homepage-banner-wrapper">
        <HomepageBanner />
      </div>
      <div className="product-category">
        <Divider className="header-title">Categories</Divider>
        <ProductCategory />
      </div>
      <div className="product-listing-wrapper p-3">
        <Divider className="header-title">Products</Divider>
        <ProductListing />
      </div>
    </div>
  );
};

export default HomepageComponent;
