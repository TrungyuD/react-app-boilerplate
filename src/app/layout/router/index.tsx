import Dashboard from 'app/pages/dashboard';
import HomePage from 'app/pages/homepage';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
const RootRoute = () => {
  return (
    <Routes>
      <Route  path="/" element={<Dashboard />} />
      <Route path="/homepage" element={<HomePage />} />
      {/* redirect to '/' */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
};

export default RootRoute;
