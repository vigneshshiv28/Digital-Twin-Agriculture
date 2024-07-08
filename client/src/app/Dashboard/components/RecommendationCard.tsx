"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface RecommendationCardProps {
  className?: string;
}

function RecommendationCard({ className }: RecommendationCardProps) {
  return (
    <div className={`h-full ${className}`}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>It's Perfect Day for Spraying</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-row items-center'>
            <Image
              src="/images/plant.png"
              width={200}
              height={200}
              alt="Picture of the Plant"
            />
            <div className='flex flex-col ml-4'>
              <h4 className="text-lg font-medium">Spray your plants today</h4>
              <p className="text-muted-foreground">The weather is perfect for spraying your plants today. The temperature is 25°C and the humidity is 60%.</p>
              <p className="text-muted-foreground">Remember to use a mild pesticide to avoid harming your plants.</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium">NPK Levels</h4>
                  <p className="text-muted-foreground">Optimal NPK levels for today: 3-2-1</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecommendationCard;
