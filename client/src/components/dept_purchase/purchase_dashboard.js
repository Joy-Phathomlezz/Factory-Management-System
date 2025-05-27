import React from 'react';
import PurchaseSidebar from './purchase_sidebar';
import { Outlet } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  minHeight: '100vh',
  background: '#f0f7f0',
};

const contentStyle = {
  marginLeft: 250, // Sidebar width
  padding: '32px 40px',
  width: '100%',
  boxSizing: 'border-box',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f0f7f0 70%, #e6f2e6 100%)',
};

const PurchaseDashboard = () => (
  <div style={containerStyle}>
    <PurchaseSidebar />
    <main style={contentStyle}>
      <Outlet />
    </main>
  </div>
);

export default PurchaseDashboard;
