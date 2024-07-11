"use client";
import React from 'react';
import { useRouter } from 'next/router';
import { FaSeedling, FaThermometerHalf, FaGasPump, FaSun, FaTint } from 'react-icons/fa';

function SensorCard() {
    const router = useRouter();
    
    const sensors = [
        {
            id: 1,
            name: "NPK Sensor",
            description: "Monitor soil nutrient levels for optimal crop growth.",
            icon: <FaSeedling className="h-12 w-12 mb-4 text-primary" />,
            path: "/npk",
        },
        {
            id: 2,
            name: "Temperature Sensor",
            description: "Track real-time temperature data for climate-smart farming.",
            icon: <FaThermometerHalf className="h-12 w-12 mb-4 text-primary" />,
            path: "/temperature",
        },
        {
            id: 3,
            name: "Gas Sensor",
            description: "Detect and monitor greenhouse gas emissions for sustainable practices.",
            icon: <FaGasPump className="h-12 w-12 mb-4 text-primary" />,
            path: "/gas",
        },
        {
            id: 4,
            name: "Light Sensor",
            description: "Optimize lighting conditions for improved crop growth and yield.",
            icon: <FaSun className="h-12 w-12 mb-4 text-primary" />,
            path: "/light",
        },
        {
            id: 5,
            name: "Soil Moisture Sensor",
            description: "Monitor soil moisture levels to enhance irrigation management.",
            icon: <FaTint className="h-12 w-12 mb-4 text-primary" />,
            path: "/moisture",
        },
    ];

    const handleCardClick = (path: string) => {
        router.push(path);
    };

    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sensors.map((sensor) => (
                    <div
                        key={sensor.id}
                        className="bg-background rounded-lg shadow-lg p-6 cursor-pointer"
                        onClick={() => handleCardClick(sensor.path)}
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
