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

const gasLevels = {
  CO2: 400,
  CO: 50,
  O2: 21
};

const GasLevelCard: React.FC = () => {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gas Levels</CardTitle>
        <CardDescription>Current gas levels in the environment</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center py-4">
        <ul>
          <li>CO2: {gasLevels.CO2} ppm</li>
          <li>CO: {gasLevels.CO} ppm</li>
          <li>O2: {gasLevels.O2}%</li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          These levels are updated in real-time.
        </div>
      </CardFooter>
    </Card>
  );
};

export default GasLevelCard;
