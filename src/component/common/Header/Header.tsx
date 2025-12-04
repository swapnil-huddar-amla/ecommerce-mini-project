import React from "react";
import { Layout, Image, Space } from "antd";
import "./Header.scss";
import MenuComponent from "../Menu/Menu";

const { Header } = Layout;

const HeaderComponent = () =>{
    return (
      <Header className="header-wrapper">
        <Space size={"middle"} className="header-container w-100">
          <div className="logo-container">WebSter</div>
          <MenuComponent />
        </Space>
      </Header>
    );
};

export default HeaderComponent;