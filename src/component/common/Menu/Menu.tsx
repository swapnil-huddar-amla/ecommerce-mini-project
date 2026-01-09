import React, { useState } from "react";
import { Menu, Space } from "antd";
import {
  HomeOutlined,
  ProductOutlined,
  CrownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useCart } from "../../Context/CartContextProvider";
import { useNavigate } from "react-router-dom";

const MainMenuItems: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Products",
    key: "product",
    icon: <ProductOutlined />,
  },
];

const ProfileMenuItems: MenuProps["items"] = [
  {
    label: "Hello, User",
    key: "subMenu",
    icon: <CrownOutlined />,
  },
];

const MenuComponent = () => {
  const [current, setCurrent] = useState("home");
  const { cart } = useCart();
  const navigate = useNavigate();

  const onMenuItemClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    if (e.key === "home") navigate("/");
    if (e.key === "product") navigate("/product-listing");
  };

  const handleCartClick = () => {
    navigate("/cart", {
      state: { items: cart },
    });
  };

  return (
    <Space size="middle">
      <div className="main-header-navigation">
        <Menu
          onClick={onMenuItemClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={MainMenuItems}
          className="header-navigation"
        />
      </div>
      <div className="header-profile-navigation">
        <CrownOutlined /> Hello, User
      </div>
      <Space size={"middle"}
        style={{ cursor: "pointer" }}
        onClick={handleCartClick}
        className="cart-icon-wrapper"
      >
        <div>
          <ShoppingCartOutlined />
        </div>
        <div className="cart-count">
          {cart.length > 0 && `(${cart.length})`}
        </div>
      </Space>
    </Space>
  );
};

export default MenuComponent;
