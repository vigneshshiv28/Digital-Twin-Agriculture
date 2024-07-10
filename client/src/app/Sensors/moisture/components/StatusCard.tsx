"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


type MoistureStatus = 'Optimal' | 'Adequate' | 'Low';

const data = [
  { date: '2023-07-01', moisture: 35 },
  { date: '2023-07-02', moisture: 32 },
  { date: '2023-07-03', moisture: 30 },
  { date: '2023-07-04', moisture: 28 },
  { date: '2023-07-05', moisture: 40 },
  { date: '2023-07-06', moisture: 38 },
  { date: '2023-07-07', moisture: 2 },
];

const StatusCard: React.FC = () => {
  const currentMoisture = data[data.length - 1].moisture;
  const moistureStatus: MoistureStatus = currentMoisture > 35 ? 'Optimal' : currentMoisture > 25 ? 'Adequate' : 'Low';

  const getStatusColor = (status: MoistureStatus): string => {
    switch (status) {
      case 'Optimal':
        return 'bg-green-500';
      case 'Adequate':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProgressColor = (status: MoistureStatus): string => {
    switch (status) {
      case 'Optimal':
        return 'bg-green-500';
      case 'Adequate':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex justify-center py-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Current Soil Moisture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-grow">
              <div className="text-2xl font-bold">{currentMoisture}%</div>
              <div className={`text-sm ${getStatusColor(moistureStatus)} text-white px-2 py-1 rounded-full inline-block mt-1`}>
                {moistureStatus}
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full ${getProgressColor(moistureStatus)}`}
                  style={{ width: `${currentMoisture}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCard;
