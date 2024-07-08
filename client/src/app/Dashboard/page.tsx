"use client";
import React from 'react';
import PlantCard from './components/PlantCard';
import LinechartChart from './components/LineChart';
import AlertCard from './components/AlertCard';
import RecommendationCard from './components/RecommendationCard';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div>
        <h3 className=' text-lime-300 text-4xl'> Your Plant</h3>
      </div>
      <div className="mb-6">
        <PlantCard />
      </div>
      <div className="mb-6">
        <LinechartChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecommendationCard className="flex-grow" />
        <AlertCard className="flex-grow" />
      </div>
    </div>
  );
};

export default Dashboard;
