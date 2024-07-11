"use client";
import React from 'react';
import GasLevelCard from './components/GasLevelCard';
import GasTrendsChart from './components/GasTrendsChart';
import GasTable from './components/GasTable';
import GasAverageCard from './components/GasAverageCard';

function GasDashboard() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
            <div className="mb-4">
                <GasLevelCard />
            </div>
          <GasAverageCard />
        </div>
        <div className="flex-1">
          <GasTrendsChart />
        </div>
      </div>
      <div>
        <GasTable />
      </div>
    </div>
  );
}

export default GasDashboard;
