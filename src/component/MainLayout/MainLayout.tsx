import React from "react";
import { Layout } from "antd";
import HeaderComponent from "../common/Header/Header";
import FooterComponent from "../common/Footer/Footer";
import "../../assets/css/Global.scss";
import "./MainLayout.scss";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="main-wrapper web-wrapper">
      <HeaderComponent />
      <Layout>
        <Layout>
          <Content className="content-wrapper">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <FooterComponent />
    </Layout>
  );
};

export default MainLayout;
