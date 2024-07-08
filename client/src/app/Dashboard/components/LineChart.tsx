import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";
import { ResponsiveContainer } from "recharts";

export default function LinechartChart() {
  const chartData = [
    { month: "January", GrowthRate: 186 },
    { month: "February", GrowthRate: 305 },
    { month: "March", GrowthRate: 237 },
    { month: "April", GrowthRate: 73 },
    { month: "May", GrowthRate: 209 },
    { month: "June", GrowthRate: 214 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth-Rate Analysis</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400} initialDimension={{ width: 520, height: 400 }}>
          <LineChart width={400} height={400} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="natural" dataKey="GrowthRate" stroke="#cee397" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer> 
      </CardContent>
    </Card>
  );
}
