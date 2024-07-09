"use client";
import React from "react";

const StatusCard = () => {
  const npkStatus = {
    nitrogen: "Optimal",
    phosphorus: "Slightly Low",
    potassium: "High"
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-5">
      <h2 className="text-xl font-bold mb-4">NPK Level Status</h2>
      <div className="flex flex-col space-y-2">
        <div>
          <h4 className="text-lg font-medium">Nitrogen</h4>
          <p className="text-muted-foreground">{npkStatus.nitrogen}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Phosphorus</h4>
          <p className="text-muted-foreground">{npkStatus.phosphorus}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Potassium</h4>
          <p className="text-muted-foreground">{npkStatus.potassium}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
