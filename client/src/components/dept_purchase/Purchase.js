import { Routes, Route } from "react-router-dom";
import PurchaseDashboard from "./purchase_dashboard";
import OrdersPage from "./orders";
import HomeDashboard from "./purchase_home";
import VendorsPage from "./purchase_vendors";
import InventoryPage from "./purchase_inventory";
import ReportsPage from "./purchase_report";
import SettingsPage from "./purchase_settings";


function Purchase() {
  return (
    <Routes>
      <Route path="/" element={<PurchaseDashboard />}>
        {/* Default page when visiting /purchase */}
        <Route index element={<HomeDashboard />} />

        {/* Nested routes */}
        <Route path="purchase_orders" element={<OrdersPage />} />
        <Route path="purchase_home" element={<HomeDashboard />} />
        <Route path="purchase_vendors" element={<VendorsPage />} />
        <Route path="purchase_inventory" element={<InventoryPage />} />
        <Route path="purchase_reports" element={<ReportsPage />} />
        <Route path="purchase_settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default Purchase;
