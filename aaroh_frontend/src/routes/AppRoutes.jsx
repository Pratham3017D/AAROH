import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing/Landing";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;