import { Routes, Route } from "react-router-dom";
import RawMaterialsPage from "./quality_rawmaterial";
import QualityDashboard from "./quality_dashboard";
import InProcessDashboard from "./in-process/inprocess_dashboard";
import PDIPage from "./pdi_page";
import QualityReportsPage from "./quality_reports";

function Quality() {
  return (
    <Routes>
      <Route path="/" element={<QualityDashboard />}>
        {/* Default route when visiting /quality */}
        <Route index element={<RawMaterialsPage />} />
        <Route path="quality_raw" element={<RawMaterialsPage />} />
        <Route path="inprocess_dashboard" element={<InProcessDashboard />} />
        <Route path="pdipage" element={<PDIPage />} />
        <Route path="quality_reports" element={<QualityReportsPage />} />
      </Route>
    </Routes>
  );
}

export default Quality;
