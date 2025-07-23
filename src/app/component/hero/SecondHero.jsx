'use client';

import React from 'react';
import Image from 'next/image';

const SecondHero = () => {
  const futureUnits = [
    {
      name: 'Picasso',
      location: 'Ampang',
      image: '/assets/secondHero/picasso-residence.avif',
    },
    {
      name: 'Lee Garden',
      location: 'KLCC',
      image: '/assets/secondHero/le.avif',
    },
    {
      name: 'Antara Genting Highland',
      location: 'Genting',
      image: '/assets/secondHero/anta.avif',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Booking Section */}
      <div className="bg-[#0f1d30] text-white text-center py-12 px-4">
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">Book Your Stay With Us</h1>
        <p className="text-sm md:text-base">Booking & Enquiries Please Click the button below.</p>
        <p className="text-xs mt-1">10am to 12am only</p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition">
          Book Now
        </button>
      </div>

      {/* Future Units */}
      <div className="py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl text-black font-semibold mb-6">Our Future Units</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {futureUnits.map((unit, index) => (
            <div
              key={index}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image src={unit.image} alt={unit.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 text-left">
                <p className="font-semibold text-black">{unit.name}</p>
                <p className="text-sm text-gray-600">{unit.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
