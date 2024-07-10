"use client";
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const data = [
  { date: '2023-07-01', moisture: 35 },
  { date: '2023-07-02', moisture: 32 },
  { date: '2023-07-03', moisture: 30 },
  { date: '2023-07-04', moisture: 28 },
  { date: '2023-07-05', moisture: 40 },
  { date: '2023-07-06', moisture: 38 },
  { date: '2023-07-07', moisture: 2 },
];

const MoistureDataTable: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleStartDateChange = (date: Date | null) => setStartDate(date || undefined);
  const handleEndDateChange = (date: Date | null) => setEndDate(date || undefined);

  const filteredData = data.filter(row => {
    const rowDate = new Date(row.date);
    if (startDate && rowDate < startDate) return false;
    if (endDate && rowDate > endDate) return false;
    return true;
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Soil Moisture Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <div>
              <label>Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="border p-2 rounded"
              />
            </div>
            <div>
              <label>End Date</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="border p-2 rounded"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Moisture (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.date}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.moisture}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default MoistureDataTable;
