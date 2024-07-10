"use client";
import React from 'react';
import StatusCard from './components/StatusCard';
import MoistureDataTable from './components/MoistureDataTable';
import MoistureLineChart from './components/MoistureLineChart';

function MoistureDashboard() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatusCard />
      </div>
      <div>
        <MoistureLineChart />
      </div>
      <MoistureDataTable />
    </div>
  );
}

export default MoistureDashboard;
