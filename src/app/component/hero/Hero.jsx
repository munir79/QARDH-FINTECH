'use client';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern Apartment in City Center',
      location: 'New York, USA',
      image: '/assets/hero/1.avif',
    },
    {
      id: 2,
      title: 'Cozy Home near the Beach',
      location: 'Los Angeles, USA',
      image: '/assets/hero/3.avif',
    },
    {
      id: 3,
      title: 'Luxury Villa with Pool',
      location: 'Bali, Indonesia',
      image: '/assets/hero/1.avif',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="/assets/hero/herop.avif"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Book <span className="italic font-serif">Now</span>
          </h1>
         <Link href='/booknow'>
          <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition">
            Start Today
          </button>
         </Link>
        </div>
      </div>

      {/* Properties Section */}
      <div className="bg-[#0d1b2a] text-white py-12 px-4 md:px-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Properties</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
          Cobnb specializes in providing personalized and high-quality homestay services to travelers from all over the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white text-black rounded-lg overflow-hidden shadow-md">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
