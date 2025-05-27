import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import StoreSidebar from "./store_sidebar";

const { Sider, Content } = Layout;

const StoreDashboard = () => (
  <Layout style={{ minHeight: "100vh" }}>
    {/* Sidebar */}
    <StoreSidebar />

    {/* Main content area */}
    <Layout>
      <Content
        style={{
          margin: 0,
          padding: 32,
          background: "linear-gradient(135deg, #f0f9ff 70%, #e0f2fe 100%)",
          borderRadius: 0,
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default StoreDashboard;
