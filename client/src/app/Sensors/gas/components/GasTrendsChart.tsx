"use client";
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface GasData {
  date: string;
  CO2: number;
  CO: number;
  O2: number;
}

const initialData: GasData[] = [
  { date: '2023-01-01', CO2: 400, CO: 50, O2: 21 },
  { date: '2023-02-01', CO2: 420, CO: 55, O2: 20.9 },
  { date: '2023-03-01', CO2: 430, CO: 52, O2: 21.1 },
  { date: '2023-04-01', CO2: 410, CO: 54, O2: 21.2 },
  { date: '2023-05-01', CO2: 415, CO: 51, O2: 21.0 },
  { date: '2023-06-01', CO2: 405, CO: 50, O2: 21.3 },
];

const GasTrendsChart: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date('2023-01-01'));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date('2023-06-01'));

  const filteredData = initialData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (!startDate || entryDate >= startDate) && (!endDate || entryDate <= endDate);
  });

  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gas Trends</CardTitle>
        <CardDescription>Historical levels of CO2, CO, and O2</CardDescription>
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
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="CO2" stroke="#8884d8" />
            <Line type="monotone" dataKey="CO" stroke="#82ca9d" />
            <Line type="monotone" dataKey="O2" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing gas levels over selected date range
        </div>
      </CardFooter>
    </Card>
  );
};

export default GasTrendsChart;
