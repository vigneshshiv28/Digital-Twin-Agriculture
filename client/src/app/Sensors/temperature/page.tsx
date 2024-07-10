"use client";
import React from 'react';
import TemperatureSensorStatusCard from './components/TemperatureSensorStatusCard';
import TemperatureSensorBarChart from './components/TemperatureSensorBarChart';
import TemperatureSensorLineChart from './components/TemperatureSensorLineChart';
import TemperatureSensorTable from './components/TemperatureSensorTable';

function TemperatureSensorDashboard() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <TemperatureSensorStatusCard />
        </div>
        <div className="flex-1">
          <TemperatureSensorBarChart />
        </div>
      </div>
      <div>
        <TemperatureSensorLineChart />
      </div>
      <div>
        <TemperatureSensorTable />
      </div>
    </div>
  );
}

export default TemperatureSensorDashboard;
