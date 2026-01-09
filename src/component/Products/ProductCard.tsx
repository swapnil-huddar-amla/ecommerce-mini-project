import {
  Card,
  Col,
  Divider,
  Image,
  InputNumber,
  Row,
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.scss";
import { getProductListing } from "../../api/Services/product.api";
import ButtonComponent from "../common/Button/Button";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { CartItemToAdd } from "../../interfaces/ClientInterface/ICart";
import { useCart } from "../Context/CartContextProvider";

const { Column } = Table;
const { Text, Title } = Typography;

const ProductCard = () => {
  const [productData, setProductData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState<CartItemToAdd[]>([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    setLoading(true);
    await getProductListing().then((res) => {
      setProductData(res.data.products);
      setLoading(false);
    });
  };

  const navigate = useNavigate();

  // accepts the product data
  const handleProductClick = (
    productData: any,
    productToAdd: CartItemToAdd
  ) => {
    //console.log("Clicked product data:", productData);
    setSelectedProduct(productData);
    setCartItems((prevItems) => [...prevItems, productToAdd]);
    //console.log(`Added ${productToAdd.name} to cart state.`);
  };

  // remove
  const handleRemoveFromCart = (productIdToRemove: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.id !== productIdToRemove
      );
      return updatedItems;
    });
  };
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      category: item.category,
      images: item.images,
      description: item.description,
      name: item.title,
    });
  };
  return (
    <>
      <Row className="product-card-wrapper" gutter={[15, 15]}>
        {productData &&
          productData.length > 0 &&
          productData.map((item) => (
            <Col span={6} className="product-card-item" key={item?.id}>
              <Card className={"single-product product-item-" + item?.id}>
                <div
                  className="card-item-wrapper"
                  onClick={() => {
                    navigate("/product-details/" + item.id);
                  }}
                >
                  <div className="product-image">
                    <Image
                      width={"100%"}
                      src={item?.images[0]}
                      preview={false}
                    />
                  </div>
                  <Space
                    size={"middle"}
                    className="category-prize-wrapper"
                    style={{ justifyContent: "space-between", width: "100%" }}
                  >
                    <div className="category">
                      <Text className="category-name">{item.category}</Text>
                    </div>
                    <div className="product-prize">
                      <Text className="product-price"> ${item.price}</Text>
                    </div>
                  </Space>
                  <div className="product-name" title={item.title}>
                    <Title level={3} className="product-name">
                      {item.title}
                    </Title>
                  </div>
                  <div className="product-desc" title={item.description}>
                    {item.description}
                  </div>
                </div>
                <div className="add-to-cart-button mt-3">
                  <ButtonComponent
                    btnType={"primary"}
                    btnSize={"large"}
                    classNames="w-100"
                    // onClick={() =>
                    //   handleProductClick(item, {
                    //     id: item.id,
                    //     name: item.title,
                    //     price: item.price,
                    //     category: item.category,
                    //     images: item.images,
                    //     title: item.title,
                    //     description: item.description,
                    //   })
                    // }
                    onClick={(e: { stopPropagation: () => void; }) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                  >
                    Add to Cart
                  </ButtonComponent>
                </div>
              </Card>
            </Col>
          ))}
      </Row>

      {cartItems.length > 0 && (
        <>
          <Divider className="header-title">Cart Items</Divider>
          <Row gutter={15}>
            <Col span={24}>
              <Table
                size="middle"
                dataSource={cartItems}
                loading={loading}
                className="cart-product-listing-wrapper"
              >
                <Column
                  title="Product Image"
                  dataIndex="images"
                  key="images"
                  sorter={() => 0}
                  className="text-wrap"
                  render={(text: string, record: CartItemToAdd) => {
                    console.log("record", record);
                    return (
                      <img
                        src={record.images[0]}
                        alt={record.title}
                        className="product-image"
                      />
                    );
                  }}
                />
                <Column
                  title="Product Name"
                  dataIndex="title"
                  key="title"
                  className="text-wrap"
                />
                <Column
                  title="Price"
                  dataIndex="price"
                  key="price"
                  className="text-wrap"
                  render={(text: string, record: CartItemToAdd) => {
                    console.log("record", record);
                    return <span>${record.price}</span>;
                  }}
                />
                <Column
                  title="Qty"
                  dataIndex="qty"
                  key="qty"
                  className="text-wrap"
                  render={(text: string, record: CartItemToAdd) => {
                    console.log("record", record);
                    return <InputNumber min={1} defaultValue={1} />;
                  }}
                />
                <Column
                  title="Action"
                  key="action"
                  width={150}
                  render={(text: string, record: CartItemToAdd) => (
                    <Space size="middle">
                      <Tooltip title="View Product">
                        <EyeOutlined
                          onClick={() => {
                            navigate("/product-details/" + record.id);
                          }}
                          area-label="View Product"
                          className="product-action cursor-pointer"
                        />
                      </Tooltip>
                      <Tooltip title="Edit Product">
                        <EditOutlined
                          area-label="Edit Product"
                          className="product-action cursor-pointer"
                        />
                      </Tooltip>
                      <Tooltip title="Delete Product">
                        <DeleteOutlined
                          onClick={() => handleRemoveFromCart(record.id)}
                          area-label="Delete Product"
                          className="product-action cursor-pointer"
                        />
                      </Tooltip>
                    </Space>
                  )}
                />
              </Table>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductCard;
