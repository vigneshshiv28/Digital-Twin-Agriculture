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

const NPKTable: React.FC = () => {
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
        <TableCaption>A list of NPK data readings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Date</TableHead>
            <TableHead className="w-1/4">Nitrogen</TableHead>
            <TableHead className="w-1/4">Phosphorus</TableHead>
            <TableHead className="w-1/4">Potassium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((reading) => (
            <TableRow key={reading.date}>
              <TableCell className="w-1/4 font-medium">{reading.date}</TableCell>
              <TableCell className="w-1/4">{reading.nitrogen}</TableCell>
              <TableCell className="w-1/4">{reading.phosphorus}</TableCell>
              <TableCell className="w-1/4">{reading.potassium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="w-1/4" colSpan={3}>Total Readings</TableCell>
            <TableCell className="w-1/4 text-right">{filteredData.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default NPKTable;
