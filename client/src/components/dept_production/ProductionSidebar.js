import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  ToolOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const menuItems = [
  {
    key: "home",
    icon: <AppstoreOutlined style={{ color: "#ffffff" }} />,
    label: "Home",
  },
  {
    key: "production_target",
    icon: <AimOutlined style={{ color: "#ffffff" }} />,
    label: "Production Target",
  },
  {
    key: "production_requirements",
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

const ProductionSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the nested route key: /production/production_target -> production_target
  const pathParts = location.pathname.split("/");
  let selectedKey = pathParts[2] || "home";
  if (location.pathname === "/production" || location.pathname === "/production/") {
    selectedKey = "home";
  }

  const onMenuSelect = ({ key }) => {
    if (key === "home") {
      navigate(""); // Navigates to /production
    } else {
      navigate(key); // Navigates to /production/{key}
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
        Production Dept
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

export default ProductionSidebar;
