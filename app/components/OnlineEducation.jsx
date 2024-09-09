import React from 'react';

const OnlineEducation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-24 lg:px-52 items-center py-12 shadow-md">
      <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Online Təhsil <br/>
          <span className="italic font-serif">Rahat & Effektiv</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Online, Hibrid ve Eyani tedris proqramlarimizla <br className="hidden md:block" /> 
           IT sahesine bir addim daha yaxinm olacaqsan
        </p>
        <button
          className="px-6 py-3 bg-[#A38FFD] text-white font-medium rounded-md shadow-md hover:bg-[#8F79E3] focus:outline-none"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          Başla
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
