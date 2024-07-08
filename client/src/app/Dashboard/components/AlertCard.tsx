"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

interface AlertCardProps {
  className?: string;
}

function AlertCard({ className }: AlertCardProps) {
  return (
    <div className={`h-full ${className}`}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
          <CardDescription>Set custom alerts for when sensor readings go out of range.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium">NPK Levels</h4>
                <p className="text-muted-foreground">Alert when any NPK level is outside the optimal range.</p>
              </div>
              <Switch className="data-[state=checked]:bg-lime-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium">Soil Moisture</h4>
                <p className="text-muted-foreground">Alert when soil moisture is too low or too high.</p>
              </div>
              <Switch className="data-[state=checked]:bg-lime-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium">Temperature</h4>
                <p className="text-muted-foreground">Alert when temperature goes above 30°C or below 10°C.</p>
              </div>
              <Switch className="data-[state=checked]:bg-lime-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium">Gas Levels</h4>
                <p className="text-muted-foreground">Alert when gas levels exceed safe thresholds.</p>
              </div>
              <Switch className="data-[state=checked]:bg-lime-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium">Light Intensity</h4>
                <p className="text-muted-foreground">Alert when light intensity is too low or too high.</p>
              </div>
              <Switch className="data-[state=checked]:bg-lime-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AlertCard;
