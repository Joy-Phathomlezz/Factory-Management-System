import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

// Define your menu items with keys matching the nested route paths
const menuItems = [
  {
    key: "/",
    icon: <AppstoreOutlined style={{ color: "#ffffff" }} />,
    label: "Home",
  },
  {
    key: "sales_inventory",
    icon: <AppstoreOutlined style={{ color: "#ffffff" }} />,
    label: "Inventory / Stock",
  },
  {
    key: "sales_report",
    icon: <BarChartOutlined style={{ color: "#ffffff" }} />,
    label: "Sales Report",
  },
  {
    key: "sales_history",
    icon: <FileTextOutlined style={{ color: "#ffffff" }} />,
    label: "Sales History",
  },
  {
    key: "sales_invoices",
    icon: <FileDoneOutlined style={{ color: "#ffffff" }} />,
    label: "Invoices",
  },
  {
    key: "sales_customers",
    icon: <UserOutlined style={{ color: "#ffffff" }} />,
    label: "Customers",
  },
];

const SalesSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the third segment of the path (e.g., /sales/sales_report -> sales_report)
  const selectedKey = location.pathname.split("/")[2] || "sales_inventory";

  // Handle menu navigation
  const onMenuSelect = ({ key }) => {
    // Navigate to the nested route (relative to /sales)
    navigate(key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={250}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #064e3b, #065f46)",
      }}
    >
      <div
        style={{
          height: 64,
          margin: 16,
          backgroundColor: "#10b981",
          textAlign: "center",
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: 20,
          lineHeight: "64px",
          userSelect: "none",
          borderRadius: 6,
          boxShadow: `0 0 10px #10b981aa`,
        }}
      >
        Sales Dept
      </div>

      <Menu
        theme="dark"
        selectedKeys={[selectedKey]}
        mode="inline"
        onClick={onMenuSelect}
        style={{
          background: "transparent",
          color: "#ffffff",
        }}
        items={menuItems}
      />
    </Sider>
  );
};

export default SalesSidebar;
