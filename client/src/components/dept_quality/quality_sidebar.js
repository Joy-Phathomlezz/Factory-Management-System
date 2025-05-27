import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  FileTextOutlined,
  BarcodeOutlined,
  CheckCircleOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

// Menu items should use keys that match your nested route paths in Quality.js
const menuItems = [
  {
    key: "quality_raw",
    icon: <BarcodeOutlined />,
    label: "Raw Materials",
  },
  {
    key: "inprocess_dashboard",
    icon: <CheckCircleOutlined />,
    label: "In-Process Checks",
  },
  {
    key: "pdipage",
    icon: <FileTextOutlined />,
    label: "Finished Goods",
  },
  {
    key: "quality_reports",
    icon: <PieChartOutlined />,
    label: "Reports",
  },
];

const QualitySidebar = ({ theme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current nested route (e.g., /quality/quality_raw → quality_raw)
  const selectedKey = location.pathname.split("/")[2] || "quality_raw";

  const onMenuSelect = ({ key }) => {
    navigate(key); // Navigates to /quality/{key}
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={250}
      style={{
        minHeight: "100vh",
        backgroundColor: theme?.sidebarBg || "#2a3c2a",
      }}
    >
      <div
        style={{
          height: 64,
          margin: 16,
          backgroundColor: theme?.sidebarSelectedBg || "#4caf50",
          textAlign: "center",
          color: theme?.sidebarSelectedText || "#fff",
          fontWeight: "bold",
          fontSize: 20,
          lineHeight: "64px",
          userSelect: "none",
          borderRadius: 6,
          boxShadow: `0 0 10px ${(theme?.sidebarSelectedBg || "#4caf50")}aa`,
        }}
      >
        Quality Dept
      </div>

      <Menu
        theme="dark"
        selectedKeys={[selectedKey]}
        mode="inline"
        onClick={onMenuSelect}
        style={{
          backgroundColor: theme?.sidebarBg || "#2a3c2a",
          color: theme?.sidebarText || "#e6f2e6",
        }}
        items={menuItems.map(item => ({
          ...item,
          icon: React.cloneElement(item.icon, {
            style: { color: theme?.sidebarText || "#e6f2e6" },
          }),
        }))}
      />
    </Sider>
  );
};

export default QualitySidebar;
