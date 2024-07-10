"use client";
import Image from 'next/image';
import React from 'react';

const PlantCard = () => (
  <div className="relative m-4 flex w-52 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-lime-300 shadow-md">
    <div className="relative mx-3 mt-3 flex h-40 justify-center items-center overflow-hidden rounded-xl">
      <Image src="/images/mango-58.png" width={150} height={150} alt="crop image" className="object-contain" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-base font-bold">Mango</h3>
      <p className="text-gray-700 text-sm">45% Growth</p>
    </div>
  </div>
);

export default PlantCard;
