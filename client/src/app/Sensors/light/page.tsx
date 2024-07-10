"use client";
import React from 'react';
import LightSensorStatusCard from './components/LightSensorStatusCard';
import LightSensorPieChart from './components/LightSensorBarChart';
import LightSensorLineChart from './components/LightSensorLineChart';
import LightSensorTable from './components/LightSensorTable';

function LightSensorDashboard() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <LightSensorStatusCard />
        </div>
        <div className="flex-1">
          <LightSensorPieChart />
        </div>
      </div>
      <div>
        <LightSensorLineChart />
      </div>
      <div>
        <LightSensorTable />
      </div>
    </div>
  );
}

export default LightSensorDashboard;
