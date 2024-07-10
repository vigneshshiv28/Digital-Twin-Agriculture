"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", temperature: 22, humidity: 60 },
  { name: "Feb", temperature: 25, humidity: 58 },
  { name: "Mar", temperature: 18, humidity: 65 },
  { name: "Apr", temperature: 20, humidity: 62 },
  { name: "May", temperature: 24, humidity: 63 },
  { name: "Jun", temperature: 27, humidity: 61 },
  { name: "Jul", temperature: 26, humidity: 63 },
];

const TemperatureSensorBarChart: React.FC = () => {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Temperature Sensor Data</CardTitle>
        <CardDescription>Temperature and humidity by month</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center py-4 w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temperature" fill="#8884d8" />
            <Bar dataKey="humidity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing temperature and humidity sensor data by month
        </div>
      </CardFooter>
    </Card>
  );
};

export default TemperatureSensorBarChart;
