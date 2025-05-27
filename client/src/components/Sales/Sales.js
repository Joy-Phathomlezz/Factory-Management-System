import { Routes, Route } from "react-router-dom";
import SalesDashboard from "./sales_dashboard";
import SalesInventoryPage from "./sales_inventory";
import SalesReportPage from "./sales_report";
import SalesHistoryPage from "./sales_history";
import InvoicesPage from "./sales_invoices";
import CustomersPage from "./sales_customers";

function Sales() {
  return (
    <Routes>
      <Route path="/" element={<SalesDashboard />}>
        <Route path="sales_inventory" element={<SalesInventoryPage />} />
        <Route path="sales_report" element={<SalesReportPage />} />
        <Route path="sales_history" element={<SalesHistoryPage />} />
        <Route path="sales_invoices" element={<InvoicesPage />} />
        <Route path="sales_customers" element={<CustomersPage />} />
        {/* Optionally, a default child route */}
        <Route index element={<SalesInventoryPage />} />
      </Route>
    </Routes>
  );
}

export default Sales;
