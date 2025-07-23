"use client";

import React, { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("KL City Center");

  const tabs = [
    "KL City Center",
    "Mont Kiara",
    "Mid Valley Area",
    "Brickfields",
    "Damansara PJ Area",
  ];

  const data = {
    "KL City Center": [
      {
        title: "Royce Residence",
        location: "KLCC",
        image: "/assets/tabs/5t.png",
      },
      {
        title: "Trion",
        location: "KL",
        image: "/assets/tabs/mid.png",
      },
      {
        title: "NEU Suite",
        location: "Ampang",
        image: "/assets/tabs/kl.avif",
      },
      {
        title: "188 Suites",
        location: "KLCC",
        image: "/assets/tabs/mid.png",
      },
    ],
    "Mont Kiara": [
      {
        title: "Arcoris Residence",
        location: "Mont Kiara",
        image: "/assets/tabs/4tt.png",
      },
      {
        title: "Kiara 163",
        location: "Mont Kiara",
        image: "/assets/tabs/5t.png",
      },
    ],
    "Mid Valley Area": [
      {
        title: "The Gardens Residences",
        location: "Mid Valley",
        image: "/assets/tabs/5t33.png",
      },
    ],
    Brickfields: [
      {
        title: "Sentral Suites",
        location: "Brickfields",
        image: "/assets/tabs/mid.png",
      },
    ],
    "Damansara PJ Area": [
      {
        title: "Empire Damansara",
        location: "PJ",
        image: "/assets/tabs/mid.png",
      },
    ],
  };

  return (
    <div className=" bg-white p-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(data[activeTab] || []).map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="bg-black bg-opacity-60 text-white p-3">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
