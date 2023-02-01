import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
const RootRoute = () => {
  return (
    <Routes>
      <Route  path="/" element={<div>fasdf</div>} />
      {/* redirect to '/' */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
};

export default RootRoute;
