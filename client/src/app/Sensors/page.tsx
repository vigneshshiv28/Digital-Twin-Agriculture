"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaSeedling, FaThermometerHalf, FaWind, FaSun, FaTint } from 'react-icons/fa';

interface Sensor {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  route: string;
}

function SensorCard() {
  const router = useRouter();

  const sensors: Sensor[] = [
    {
      id: 1,
      name: "NPK Sensor",
      description: "Monitor soil nutrient levels for optimal crop growth.",
      icon: <FaSeedling className="h-12 w-12 mb-4 text-lime-300" />,
      route: "/Sensors/npk"
    },
    {
      id: 2,
      name: "Temperature Sensor",
      description: "Track real-time temperature data for climate-smart farming.",
      icon: <FaThermometerHalf className="h-12 w-12 mb-4 text-white fill-current" style={{ color: 'red' }} />,
      route: "/Sensors/temperature"
    },
    {
      id: 3,
      name: "Gas Sensor",
      description: "Detect and monitor greenhouse gas emissions for sustainable practices.",
      icon: <FaWind className="h-12 w-12 mb-4 text-gray-500" />,
      route: "/Sensors/gas"
    },
    {
      id: 4,
      name: "Light Sensor",
      description: "Optimize lighting conditions for improved crop growth and yield.",
      icon: <FaSun className="h-12 w-12 mb-4 text-yellow-500" />,
      route: "/Sensors/light"
    },
    {
      id: 5,
      name: "Soil Moisture Sensor",
      description: "Monitor soil moisture levels to enhance irrigation management.",
      icon: <FaTint className="h-12 w-12 mb-4 text-blue-500" />,
      route: "/Sensors/moisture"
    },
  ];

  const handleSensorClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sensors.map((sensor) => (
          <div
            key={sensor.id}
            className="bg-background rounded-lg shadow-lg p-6 m-5 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleSensorClick(sensor.route)}
          >
            {sensor.icon}
            <h3 className="text-xl font-bold mb-2">{sensor.name}</h3>
            <p className="text-muted-foreground">{sensor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SensorCard;
