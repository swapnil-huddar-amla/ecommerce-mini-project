import { Card, Col, Image, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import "./Products.scss";
import { productCategories } from "../../utils/Category.util";

const { Text, Title } = Typography;

const ProductCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // State to hold the selected category

  useEffect(() => {
    setSelectedCategory(productCategories.length > 0 ? productCategories[0].id : "all");
  }, []);

  

  return (
    <div className="product-category-wrapper p-3">
      <Row gutter={16} className="category-container">
        {productCategories.map((productData) => (
          <Col className="category-card-wrapper" span={4}>
            <div className="product-category-item" key={productData.id}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img draggable={false} alt="example" src={productData.thumbnailUrl} />
                }
              >
                <Card.Meta
                  title={<Title level={4}>{productData.name}</Title>}
                />
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductCategory;
