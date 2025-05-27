import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SalesSidebar from "./SalesSidebar";

const { Content } = Layout;

const SalesDashboard = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <SalesSidebar />
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "linear-gradient(to bottom right, #f0fdf4, #d1fae5)",
          borderRadius: 12,
          minHeight: 280,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default SalesDashboard;
