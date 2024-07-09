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


interface NPKData {
  date: string;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

const initialData: NPKData[] = [
  { date: "2023-01-01", nitrogen: 40, phosphorus: 30, potassium: 30 },
  { date: "2023-02-01", nitrogen: 35, phosphorus: 28, potassium: 32 },
  { date: "2023-03-01", nitrogen: 45, phosphorus: 35, potassium: 31 },
  { date: "2023-04-01", nitrogen: 42, phosphorus: 32, potassium: 30 },
  { date: "2023-05-01", nitrogen: 38, phosphorus: 33, potassium: 29 },
  { date: "2023-06-01", nitrogen: 40, phosphorus: 31, potassium: 28 },
];

const NPKLineChart: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2023-01-01"));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2023-06-01"));

  const filteredData = initialData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (!startDate || entryDate >= startDate) && (!endDate || entryDate <= endDate);
  });

  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>NPK Historical Data</CardTitle>
        <CardDescription>Historical levels of Nitrogen, Phosphorus, and Potassium</CardDescription>
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
        <ResponsiveContainer width="100%" height={400} initialDimension={{ width: 520, height: 400 }}>
            <LineChart width={730} height={400} data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="nitrogen" stroke="#cee397" strokeWidth={2}/>
            <Line type="natural" dataKey="phosphorus" stroke="#f2cb8a" strokeWidth={2}/>
            <Line type="natural" dataKey="potassium" stroke="#536e2b" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing NPK levels over selected date range
        </div>
      </CardFooter>
    </Card>
  );
};

export default NPKLineChart;
