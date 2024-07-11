"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

const GasTable: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date('2023-01-01'));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date('2023-06-01'));

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
        <TableCaption>A list of gas data readings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>CO2 (ppm)</TableHead>
            <TableHead>CO (ppm)</TableHead>
            <TableHead>O2 (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.CO2}</TableCell>
              <TableCell>{entry.CO}</TableCell>
              <TableCell>{entry.O2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Records: {filteredData.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default GasTable;
