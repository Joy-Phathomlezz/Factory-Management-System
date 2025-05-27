import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

// Menu items: keys match the nested route paths in Store.js
const menuItems = [
  {
    key: "/",
    icon: <AppstoreOutlined style={{ color: "#ffffff" }} />,
    label: "Home",
  },
  {
    key: "store_requirements",
    icon: <FileTextOutlined style={{ color: "#ffffff" }} />,
    label: "Requirements",
  },
  {
    key: "delivered",
    icon: <CheckCircleOutlined style={{ color: "#ffffff" }} />,
    label: "Delivered",
  },
  {
    key: "bill_of_materials",
    icon: <FileDoneOutlined style={{ color: "#ffffff" }} />,
    label: "Bill of Materials",
  },
  {
    key: "assigned_items",
    icon: <ToolOutlined style={{ color: "#ffffff" }} />,
    label: "Assigned",
  },
];

const StoreSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine selected key based on URL
  // /store, /store/assigned_items, etc.
  const pathParts = location.pathname.split("/");
  // pathParts[2] is the nested route key (e.g., "assigned_items")
  let selectedKey = pathParts[2] || "home";
  // If at /store, highlight Home
  if (location.pathname === "/store" || location.pathname === "/store/") {
    selectedKey = "home";
  }

  const onMenuSelect = ({ key }) => {
    if (key === "home") {
      navigate(""); // Navigates to /store
    } else {
      navigate(key); // Navigates to /store/{key}
    }
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
        Store Dept
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

export default StoreSidebar;
