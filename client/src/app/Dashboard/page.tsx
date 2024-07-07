import React from 'react';
import PlantCard from './components/PlantCard';

const data = [
  // Sample data for the graphs
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const Dashboard = () => {
  return (
    <>
        <div>
            <PlantCard/>
        </div>
    </>
  );
};

export default Dashboard;
