"use client";
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const averageGasLevels = {
  CO2: 390,
  CO: 45,
  O2: 21.5,
  period: 'Last 30 Days'
};

const GasAverageCard: React.FC = () => {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Average Gas Levels</CardTitle>
        <CardDescription>Average levels over {averageGasLevels.period}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center py-4">
        <div className="text-center">
          <p><strong>CO2:</strong> {averageGasLevels.CO2} ppm</p>
          <p><strong>CO:</strong> {averageGasLevels.CO} ppm</p>
          <p><strong>O2:</strong> {averageGasLevels.O2}%</p>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Data averaged over the last 30 days.
        </div>
      </CardFooter>
    </Card>
  );
};

export default GasAverageCard;
