import React from 'react';

const Footer = () => {
  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+01968968569',
      href: 'tel:+60162995367',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'jakirhossainmunir80@gmail.com',
      href: 'mailto:ask@cobnb.com.my',
    },
    {
      icon: '📍',
      label: 'Address',
      value:
        '100 A - 100 C, Jalan Imbi, WP, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
      href: 'https://www.google.com/maps?q=100+A+-+100+C,+Jalan+Imbi,+WP,+55100+Kuala+Lumpur',
    },
  ];

  return (
    <div className="bg-[#0D1A2B] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-2">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded">
              <div className="text-black font-bold text-lg">LOGO</div>
            </div>
          </div>
          <p className="text-lg font-semibold">COBNB</p>
          <p className="text-xs text-gray-300">THE BNB EXPERT</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline text-gray-200"
            >
              <span>{item.icon}</span>
              <span>{item.value}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mx-4" />

      <div className="text-center py-4 text-xs flex flex-col md:flex-row items-center justify-center gap-2">
        <span>COBNB SDN BHD – COMPANY REG NO. 1231917-W (C) 2025.</span>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline">ALL RIGHTS RESERVED</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline">PRIVACY POLICY</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline">TERMS & CONDITION</a>
      </div>
    </div>
  );
};

export default Footer;
