"use client";
import React from "react";

const TemperatureSensorStatusCard = () => {
  const temperatureSensorStatus = {
    temperature: "Normal",
    humidity: "Optimal",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-5">
      <h2 className="text-xl font-bold mb-4">Temperature Sensor Status</h2>
      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-lg font-medium">Temperature</h4>
          <p className="text-muted-foreground">{temperatureSensorStatus.temperature}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Humidity</h4>
          <p className="text-muted-foreground">{temperatureSensorStatus.humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureSensorStatusCard;
