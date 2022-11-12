import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Avia from "./pages/Avia/Avia";
import Tickets from "./pages/Tickets/Tickets";

function Routing() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("avia");
    }
  }, []);

  return (
    <Routes>
      <Route path="avia" element={<Avia />} />
      <Route path="avia/info" element={<Tickets />} />
    </Routes>
  );
}

export default Routing;
