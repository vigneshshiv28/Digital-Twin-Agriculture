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

interface TemperatureSensorData {
  date: string;
  temperature: number;
  humidity: number; // Changed from duration to humidity
}

const initialData: TemperatureSensorData[] = [
  { date: "2023-01-01", temperature: 22, humidity: 60 },
  { date: "2023-02-01", temperature: 25, humidity: 58 },
  { date: "2023-03-01", temperature: 18, humidity: 65 },
  { date: "2023-04-01", temperature: 20, humidity: 62 },
  { date: "2023-05-01", temperature: 24, humidity: 63 },
  { date: "2023-06-01", temperature: 27, humidity: 61 },
];

const TemperatureSensorTable: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2023-01-01"));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2023-06-01"));

  const filteredData = initialData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (!startDate || entryDate >= startDate) && (!endDate || entryDate <= endDate);
  });

  const clearDateRange = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className="p-2 border rounded"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date as Date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date"
          className="p-2 border rounded"
        />
        <button className="p-2 border rounded bg-gray-200" onClick={clearDateRange}>
          Clear Dates
        </button>
      </div>
      <Table className="min-w-full divide-y divide-gray-200">
        <TableCaption className="text-center py-2">Temperature Sensor Data Readings</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Temperature (°C)
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Humidity (%)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {filteredData.map((reading) => (
            <TableRow key={reading.date}>
              <TableCell className="px-6 py-4 whitespace-nowrap">{reading.date}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">{reading.temperature}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">{reading.humidity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-gray-100">
          <TableRow>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan={2}>
              Total Readings
            </TableCell>
            <TableCell className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              {filteredData.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TemperatureSensorTable;
