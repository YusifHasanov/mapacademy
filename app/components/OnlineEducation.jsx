import React from 'react';

const OnlineEducation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-24 lg:px-52 items-center py-12 shadow-md">
      <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Online Education Is{' '}
          <span className="italic font-serif">Smart & Effective</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Online education can be a convenient and <br className="hidden md:block" /> 
          flexible option for students who are unable <br className="hidden md:block" /> 
          to attend traditional in-person classes due to their location, schedule,
        </p>
        <button
          className="px-6 py-3 bg-[#A38FFD] text-white font-medium rounded-md shadow-md hover:bg-[#8F79E3] focus:outline-none"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          Let's Started
        </button>
      </div>
      <div className="w-full md:w-auto">
        <img
          src="https://res.cloudinary.com/dhhlnrons/image/upload/v1725347143/tyduwidu5yyaolslkf9c.png"
          alt="Online Education Illustration"
          className="w-full md:w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default OnlineEducation;
