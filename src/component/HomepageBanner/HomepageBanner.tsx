import React from "react";
import { Carousel } from "antd";
import "./HomepageBanner.scss";
import { bannerImages } from "../../utils/Banner.util";
import ImageComponent from "../common/Image/Image";

const HomepageBanner = () => {
  return (
    <div className="homepage-banner-wrapper w-100">
      <Carousel autoplay arrows={true} dots={true} autoplaySpeed={5000}>
        {bannerImages.banners.map((banner, index) => (
          <div key={index} className="banner-image w-100">
            <ImageComponent
              isPreview={false}
              imageUrl={banner.imageUrl}
              altText={`Banner ${index + 1}`}
              className="banner-image w-100"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomepageBanner;
