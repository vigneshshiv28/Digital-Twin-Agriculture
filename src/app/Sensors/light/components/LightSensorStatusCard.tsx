"use client";
import React from "react";

const LightSensorStatusCard = () => {
  const lightSensorStatus = {
    intensity: "Optimal",
    duration: "Sufficient",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-5">
      <h2 className="text-xl font-bold mb-4">Light Sensor Status</h2>
      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-lg font-medium">Light Intensity</h4>
          <p className="text-muted-foreground">{lightSensorStatus.intensity}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Duration</h4>
          <p className="text-muted-foreground">{lightSensorStatus.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default LightSensorStatusCard;
