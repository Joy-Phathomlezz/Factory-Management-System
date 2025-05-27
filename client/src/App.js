import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
//Home Page

import HomePage from "./components/Home/Home.js";
import LoginPage from './components/Home/Auth/LoginPage.js';
import SignupPage from './components/Home/Auth/SignupPage';

//sales

import Sales from "./components/Sales/Sales.js";
import Purchase from "./components/dept_purchase/Purchase.js";
import Quality from "./components/dept_quality/Quality.js";
import Store from "./components/store/Store.js";
import Production from "./components/dept_production/Production.js";


import StoreAdminDashboard from "./components/Admin/StoreAdminDashboard.jsx";
import AdminStoreDetails from "./components/Admin/AdminStoreDetails.jsx";
import InventoryTable from "./components/Admin/InventoryTable.jsx";
import InventoryDetails from "./components/Admin/InventoryDetails.jsx";
import InvantoryAnalaticDashboard from "./components/Admin/InvantoryAnalaticDashboard.jsx";
import RawMaterialHistory from "./components/Admin/RawMaterialHistory.jsx";
import ItemRequest from "./components/Admin/ItemRequest.jsx";

// Dashboards & Utilities
import ExcelTemplate from "./components/excellsheet/ExcelTemplate.js";
import RoleSelector from "./components/RoleSelector.js";
import RegistrarDashboard from "./components/RegistrarDashboard.js";
import ApproverDashboard from "./components/ApproverDashboard.js";
import ReadyForDispatch from "./components/Ready.js";
import BillOfMaterials from "./BillOfMaterials.js";


// Production
import ProductionDashboard from "./components/dept_production/production_dashboard.js";

// Purchase








const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} >
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="/production/*" element={<Production />} />
        <Route path="/sales/*" element={<Sales />} />
        <Route path="/purchase/*" element={<Purchase/>} />
        <Route path="/quality/*" element={<Quality />}/>
        <Route path="/store/*" element={<Store />}/>
      
   




        <Route path="/dashboard" element={<StoreAdminDashboard />} />
        <Route path="/details" element={<AdminStoreDetails />} />
        <Route path="/details/inventory" element={<InventoryDetails />} />
        <Route path="/details/analysis" element={<InvantoryAnalaticDashboard />} />
        <Route path="/details/history" element={<RawMaterialHistory />} />
        <Route path="/details/request" element={<ItemRequest />} />
        <Route path="/details/roleselector" element={<RoleSelector />} />
        <Route path="/details/registrar" element={<RegistrarDashboard />} />
        <Route path="/details/approver" element={<ApproverDashboard />} />
        <Route path="/details/excel" element={<ExcelTemplate />} />
        <Route path="/details/ready" element={<ReadyForDispatch />} />
        <Route path="/details/billofmaterials" element={<BillOfMaterials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
