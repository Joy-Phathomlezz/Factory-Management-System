import { Routes, Route } from "react-router-dom";
import ProductionDashboard from "./production_dashboard";
import ProductionHome from "./ProductionHome";
import ProductionRequirements from "./ProductionRequirements";
import DeliveredPage from "./DeliveredPage";
import AssignedItems from "./AssignedItems";
import ProductionTargetDetails from "./ProductionTarget";

function Production() {
  return (
    <Routes>
      <Route path="/" element={<ProductionDashboard />}>
        <Route index element={<ProductionHome />} />
        <Route path="production_requirements" element={<ProductionRequirements />} />
        <Route path="production_target" element={<ProductionTargetDetails />} />
        <Route path="delivered" element={<DeliveredPage />} />
        <Route path="assigned_items" element={<AssignedItems />} />
      </Route>
    </Routes>
  );
}
export default Production;
