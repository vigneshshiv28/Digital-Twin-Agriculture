"use client";
import React from "react";
import { Pie, PieChart, Label, Cell, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { name: "Nitrogen", value: 40, fill: "#cee397" },
  { name: "Phosphorus", value: 30, fill: "#f2cb8a" },
  { name: "Potassium", value: 30, fill: "#536e2b" }
];

const NPKPieChart: React.FC = () => {
  return (
    <Card className="flex flex-col items-center ">
      <CardHeader className="items-center pb-0">
        <CardTitle>NPK Levels</CardTitle>
        <CardDescription>Soil nutrient levels</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center py-4">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <Label
              value="NPK Levels"
              position="center"
              fill="#8884d8"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing current NPK levels in the soil
        </div>
      </CardFooter>
    </Card>
  );
};

export default NPKPieChart;
