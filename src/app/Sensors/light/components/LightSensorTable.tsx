"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LightSensorData {
  date: string;
  intensity: number;
  duration: number;
}

const initialData: LightSensorData[] = [
  { date: "2023-01-01", intensity: 40, duration: 30 },
  { date: "2023-02-01", intensity: 35, duration: 28 },
  { date: "2023-03-01", intensity: 45, duration: 35 },
  { date: "2023-04-01", intensity: 42, duration: 32 },
  { date: "2023-05-01", intensity: 38, duration: 33 },
  { date: "2023-06-01", intensity: 40, duration: 31 },
];

const LightSensorTable: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2023-01-01"));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2023-06-01"));

  const filteredData = initialData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (!startDate || entryDate >= startDate) && (!endDate || entryDate <= endDate);
  });

  return (
    <div className="flex flex-col items-center">
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
      <Table>
        <TableCaption>A list of light sensor data readings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Date</TableHead>
            <TableHead className="w-1/4">Intensity</TableHead>
            <TableHead className="w-1/4">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((reading) => (
            <TableRow key={reading.date}>
              <TableCell className="w-1/4 font-medium">{reading.date}</TableCell>
              <TableCell className="w-1/4">{reading.intensity}</TableCell>
              <TableCell className="w-1/4">{reading.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="w-1/4" colSpan={2}>Total Readings</TableCell>
            <TableCell className="w-1/4 text-right">{filteredData.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default LightSensorTable;
