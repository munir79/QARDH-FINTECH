'use client';
import React from 'react';

const Payment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Payment Page</h1>
        <p className="text-gray-600 mb-6">This is where payment processing will be handled.</p>
        <button
          onClick={() => window.history.back()}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Payment;
