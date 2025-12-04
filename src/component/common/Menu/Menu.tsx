import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProductOutlined,
  ContactsOutlined,
  CrownOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";

const MainMenuItems: MenuProps["items"] = [
  {
    label: <a href="/">Home</a>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <a href="/product-listing">Products</a>,
    key: "product",
    icon: <ProductOutlined />,
  },
];

const ProfileMenuItems: MenuProps["items"] = [
  {
    label: <a href="/">Hello, User</a>,
    key: "subMenu",
    icon: <CrownOutlined />,
  },
];

const MenuComponent = () => {
  const [current, setCurrent] = useState("home");
  

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click 11111", e);
    setCurrent(e.key);
  };
  
  return (
    <>
      <div className="main-header-navigation">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={MainMenuItems}
          className="header-navigation"
        />
      </div>
      <div className="header-profile-navigation">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          items={ProfileMenuItems}
          className="profile-navigation"
        />
      </div>
    </>
  );
};

export default MenuComponent;
