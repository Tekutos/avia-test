import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Avia from "./pages/Avia/Avia";

function Routing() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('avia')
  }, [])

  return (
    <Routes>
      <Route path="avia" element={<Avia/>}/>
      <Route />
    </Routes>
  );
}

export default Routing;
