import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import ProductionSidebar from "./ProductionSidebar";

const { Content } = Layout;

const ProductionDashboard = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <ProductionSidebar />
    <Layout>
      <Content
        style={{
          margin: 0,
          padding: 32,
          background: "linear-gradient(135deg, #f0f9ff 70%, #e0f2fe 100%)",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default ProductionDashboard;
