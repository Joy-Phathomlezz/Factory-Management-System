import { Routes, Route } from "react-router-dom";
import StoreDashboard from "./store_dashboard";
import StoreRequirements from "./store_requirements";
import BillOfMaterials from "../../BillOfMaterials";
import AssignedItems from "./store_assigned";
import DeliveredPage from "./store_delivered";

function Store() {
  return (
    <Routes>
      <Route path="/" element={<StoreDashboard />}>
        {/* Default page when visiting /store */}
        <Route index element={<StoreRequirements />} />
        <Route path="store_requirements" element={<StoreRequirements />} />
        <Route path="bill_of_materials" element={<BillOfMaterials />} />
        <Route path="assigned_items" element={<AssignedItems />} />
        <Route path="delivered" element={<DeliveredPage />} />
      </Route>
    </Routes>
  );
}

export default Store;
