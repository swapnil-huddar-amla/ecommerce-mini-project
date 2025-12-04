import { Col, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageComponent from "../common/Image/Image";
import "./Products.scss";
import Heading from "../common/Heading/Heading";
import { ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import ButtonComponent from "../common/Button/Button";
import ProductStocks from "./ProductStocks";
import ProductDiscount from "./ProductDiscount";

const { Text } = Typography;

const ProductDetails = () => {
  const { productId } = useParams<Record<string, string | undefined>>();
  const [productDetails, setProductDetails] = useState<any>({});

  const getProductDetails = async () => {
    fetch("https://dummyjson.com/products/" + productId)
      .then((res) => res.json())
      .then((json) => setProductDetails(json));
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  const navigate = useNavigate();

  return (
    <div className="product-details-page-wrapper p-3">
      <Row gutter={[30, 30]} className="product-details-wrapper">
        <Col span={24}>
          <div className="d-flex justify-content-end">
            <ButtonComponent
              btnSize={"middle"}
              btnType={"primary"}
              btnIcon={<ArrowLeftOutlined />}
              onClick={() => {
                navigate("/");
              }}
              classNames="back-button"
            >
              {"Back"}
            </ButtonComponent>
          </div>
        </Col>
        <Col span={8}>
          <div className="product-image-container">
            <div className="product-image">
              <ImageComponent
                imageHeight={"auto"}
                imageUrl={productDetails.thumbnail}
                imageWidth={"100%"}
                isPreview={false}
                altText={productDetails?.title}
              />
            </div>
          </div>
        </Col>
        <Col span={16}>
          <Row className="pdp-description-wrapper">
            <Col span={24} className="mb-3">
              <div className="brand-tag mb-2">
                {productDetails.brand ? productDetails.brand : "Brand"}
              </div>
              <div className="category-tag mb-2">
                {productDetails.category ? productDetails.category : "Category"}
              </div>
              <div className="product-name-wrapper mb-2">
                <Heading
                  titleClass="product-name"
                  titleText={productDetails.title}
                  textFontLevel={2}
                />
              </div>
              <div className="product-price mb-3">
                <Text className="price">${productDetails?.price}</Text>
              </div>
              <div className="product-description mb-3">
                <Text className="desc">{productDetails?.description}</Text>
              </div>
              <Space size={"large"} className="product-extra-attribute">
                <ProductStocks
                  stockLabel={"Stock"}
                  stockValue={productDetails?.stock}
                />
                <ProductDiscount
                  discountLabel={"Discount"}
                  discountValue={productDetails?.discountPercentage}
                />
              </Space>
            </Col>

            <Col span={24}>
              <Space size={"large"} className="add-to-cart-container">
                <div className="quantity-input-wrapper">
                  <input
                    type="text"
                    min={1}
                    max={productDetails?.stock || 1}
                    defaultValue={1}
                    className="quantity-input"
                    size={8}
                  />
                </div>
                <div className="btn-add-to-cart">
                  <ButtonComponent
                    btnType={"primary"}
                    btnSize={"large"}
                    classNames="add-to-cart-button"
                    btnIcon={<ShoppingCartOutlined />}
                  >
                    {"Add to Cart"}
                  </ButtonComponent>
                </div>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
