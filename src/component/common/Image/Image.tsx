import React from "react";
import { IImage } from "../../../interfaces/ClientInterface/IImage";
import { Image } from "antd";


const ImageComponent = (props: IImage) =>{
    const {imageWidth, imageUrl, imageHeight, altText, isPreview, className} = props;
    return (
      <Image
        className={className}
        src={imageUrl}
        preview={isPreview}
        width={imageWidth}
        height={imageHeight}
        alt={altText}
        fallback={"../../../../no-image.jpg"}
      />
    );
};

export default ImageComponent;