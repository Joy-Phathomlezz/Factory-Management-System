import React from 'react';

const ProductionHome = () => {
  return (
    <div style={{ padding: 24, backgroundColor: '#ffffff', borderRadius: 8, minHeight: '80vh' }}>
      <h1>Welcome to the Production Dashboard</h1>
      <p>This is the home page for the Production module. Here you can find an overview of production metrics, recent activities, and quick links.</p>
      <section style={{ marginTop: 24 }}>
        <h2>Overview</h2>
        <ul>
          <li>Production status: <strong>Running smoothly</strong></li>
          <li>Pending orders: <strong>12</strong></li>
          <li>Completed batches today: <strong>5</strong></li>
          <li>Upcoming maintenance: <strong>Scheduled for next week</strong></li>
        </ul>
      </section>
      <section style={{ marginTop: 24 }}>
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/production/production_requirements">Production Requirements</a></li>
          <li><a href="/production/delivered">Delivered Items</a></li>
          <li><a href="/production/bill_of_materials">Bill of Materials</a></li>
          <li><a href="/production/assigned_items">Assigned Items</a></li>
        </ul>
      </section>
    </div>
  );
};

export default ProductionHome;
