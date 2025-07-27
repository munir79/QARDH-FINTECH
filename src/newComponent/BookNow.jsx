'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const BookNow = () => {
  const router = useRouter();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [checkIn, setCheckIn] = useState('2025-07-28');
  const [checkOut, setCheckOut] = useState('2025-07-29');

  const rooms = [
    {
      id: 1,
      image: '/assets/tabs/5t.png',
      title: 'Riveria with KL City View Room Only',
      price: 100,
      capacity: 2,
      deal: false,
      info: 'Only 1 Room Left',
      note: 'Kindly be noted our on-site staff will be on-standby to hand over the key.',
    },
    {
      id: 2,
      image: '/assets/tabs/mid.png',
      title: 'Weekly Stay Deal - Agile Bukit Bintang Standard 2 Bedroom',
      price: 176.22,
      originalPrice: 198,
      capacity: 4,
      deal: true,
      info: 'You need 6 more nights to book this room.',
      note: 'Complimentary Weekly Cleaning Provided :)',
    },
    {
      id: 3,
      image: '/assets/tabs/4tt.png',
      title: 'Agile Bukit Bintang Standard 2 Bedroom',
      price: 198,
      capacity: 4,
      deal: false,
      info: 'Only 1 Room Left',
      note: '',
    },
  ];

  const handleAddRoom = (room) => {
    if (!selectedRooms.find((r) => r.id === room.id)) {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const handleRemoveRoom = (roomId) => {
    setSelectedRooms(selectedRooms.filter((r) => r.id !== roomId));
  };

  const handleCheckAvailability = () => {
    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm text-black font-semibold">Check In</label>
            <input
              type="date"
              className="border text-black rounded px-3 py-1 mt-1"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-black font-semibold">Check Out</label>
            <input
              type="date"
              className="border text-black rounded px-3 py-1 mt-1"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Room Cards */}
        <div className="lg:col-span-3 space-y-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded shadow flex flex-col md:flex-row">
              <img src={room.image} alt={room.title} className="w-full md:w-60 h-48 object-cover rounded-l" />
              <div className="flex-1 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-blue-700">{room.title}</h2>
                  {room.deal && (
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded font-bold">SPECIAL DEAL</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{room.note}</p>
                <p className="text-sm text-green-600 font-medium">Non-Refundable • Special Conditions</p>
                <p className="text-sm">Room Capacity: {room.capacity} Adult(s)</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-blue-900">
                      RM {room.price.toFixed(2)}{' '}
                      {room.originalPrice && (
                        <span className="line-through text-sm text-gray-500 ml-1">RM {room.originalPrice}</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">Price for 1 Night</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-red-500 font-semibold">{room.info}</p>
                    <button
                      onClick={() => handleAddRoom(room)}
                      className="mt-1 bg-yellow-400 hover:bg-yellow-500 text-sm px-3 py-1 rounded text-white font-semibold"
                    >
                      Add Room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded shadow p-4 h-fit">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-black">Booking Summary</h3>

          {selectedRooms.length === 0 ? (
            <div className="text-center text-black">
              <svg className="mx-auto mb-2" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 3a3 3 0 0 0-3 3v13h2v2h2v-2h10v2h2v-2h2V6a3 3 0 0 0-3-3H5zm0 2h14a1 1 0 0 1 1 1v10H4V6a1 1 0 0 1 1-1zm3 2v2h8V7H8zm0 4v2h8v-2H8z" />
              </svg>
              <p>No Room(s) Selected</p>
            </div>
          ) : (
            <div className="space-y-3 text-black">
              {/* Dates */}
              <div className="text-sm font-medium border-b pb-2">
                <p>
                  <span className="font-semibold">Check-in:</span> {checkIn}
                </p>
                <p>
                  <span className="font-semibold">Check-out:</span> {checkOut}
                </p>
              </div>

              {/* Selected Rooms */}
              {selectedRooms.map((room) => (
                <div key={room.id} className="border-b pb-2 flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">{room.title}</p>
                    <p className="text-xs text-gray-600">RM {room.price.toFixed(2)} for 1 Night</p>
                  </div>
                  <button
                    onClick={() => handleRemoveRoom(room.id)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Total */}
              <div className="pt-2 border-t mt-3">
                <p className="text-sm font-semibold">
                  Total: RM{' '}
                  {selectedRooms.reduce((acc, room) => acc + room.price, 0).toFixed(2)}
                </p>
              </div>

              {/* Check Availability Button */}
              <button
                onClick={handleCheckAvailability}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Check Availability
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
