import React from 'react';
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Testimonial = () => {
  return (
    <div className="p-8 md:px-24 lg:px-52 py-12">
      <div className="text-left mb-6">
        <p className="text-gray-700 text-sm font-bold">Feedback</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Students Say
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex items-center">
          <div className="text-gray-200 text-9xl leading-none">
            “
          </div>
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed max-w-xl">
            The instructor was knowledgeable and engaging, and I learned a lot
            in this course.
          </p>
        </div>
        <div className="flex items-center mt-10 md:mt-0">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-16 h-16 rounded-full border-4 border-yellow-400"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold text-gray-900">Raju</p>
              <p className="text-gray-500 text-sm">UI UX DESIGNER</p>
            </div>
          </div>
          <div className="flex ml-8">
            <button className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100">
              {/* <FiArrowLeft className="text-xl text-gray-800" /> */}
            </button>
            <button className="ml-4 p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100">
              {/* <FiArrowRight className="text-xl text-gray-800" /> */}
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
