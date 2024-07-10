"use client";
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ResponsiveContainer } from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TemperatureSensorData {
  date: string;
  temperature: number;
  humidity: number;
}

const initialData: TemperatureSensorData[] = [
  { date: "2023-01-01", temperature: 22, humidity: 60 },
  { date: "2023-02-01", temperature: 25, humidity: 58 },
  { date: "2023-03-01", temperature: 18, humidity: 65 },
  { date: "2023-04-01", temperature: 20, humidity: 62 },
  { date: "2023-05-01", temperature: 24, humidity: 63 },
  { date: "2023-06-01", temperature: 27, humidity: 61 },
];

const TemperatureSensorLineChart: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2023-01-01"));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2023-06-01"));

  const filteredData = initialData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (!startDate || entryDate >= startDate) && (!endDate || entryDate <= endDate);
  });

  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Temperature Sensor Historical Data</CardTitle>
        <CardDescription>Historical temperature and humidity by month</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center py-4 w-full">
        <div className="flex gap-4 mb-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date ?? undefined)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="p-2 border rounded"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date ?? undefined)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            className="p-2 border rounded"
          />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={730} height={400} data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="temperature" stroke="#8884d8" strokeWidth={2} />
            <Line type="natural" dataKey="humidity" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing temperature and humidity sensor data over selected date range
        </div>
      </CardFooter>
    </Card>
  );
};

export default TemperatureSensorLineChart;
