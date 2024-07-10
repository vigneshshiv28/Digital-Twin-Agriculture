"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { date: '2023-07-01', moisture: 35 },
    { date: '2023-07-02', moisture: 32 },
    { date: '2023-07-03', moisture: 30 },
    { date: '2023-07-04', moisture: 28 },
    { date: '2023-07-05', moisture: 40 },
    { date: '2023-07-06', moisture: 38 },
    { date: '2023-07-07', moisture: 2 },
  ];

function MoistureLineChart() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Soil Moisture Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid vertical = {false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="moisture" stroke="#8884d8" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default MoistureLineChart
