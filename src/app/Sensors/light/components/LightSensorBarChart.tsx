// LightSensorBarChart.tsx
"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", intensity: 40, duration: 30 },
  { name: "Feb", intensity: 35, duration: 28 },
  { name: "Mar", intensity: 45, duration: 35 },
  { name: "Apr", intensity: 42, duration: 32 },
  { name: "May", intensity: 38, duration: 33 },
  { name: "Jun", intensity: 40, duration: 31 },
  { name: "Jul", intensity: 38, duration: 33 },
];

const LightSensorBarChart: React.FC = () => {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Light Sensor Data</CardTitle>
        <CardDescription>Intensity and duration of light</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center py-4 w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="intensity" fill="#8884d8" />
            <Bar dataKey="duration" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing light sensor data by month
        </div>
      </CardFooter>
    </Card>
  );
};

export default LightSensorBarChart;
