"use client";
import React from 'react';
import NPKPieChart from './components/NPKPieChart';
import StatusCard from './components/StatusCard';
import NPKLineChart from './components/NPKLineChart';
import NPKTable from './components/NPKTable';

function NPKDashboard() {
  return (
    <div className="p-4 space-y-4 ">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <StatusCard />
        </div>
        <div className="flex-1">
          <NPKPieChart />
        </div>
      </div>
      <div>
        <NPKLineChart />
      </div>
      <div>
        <NPKTable />
      </div>
    </div>
  );
}

export default NPKDashboard;

