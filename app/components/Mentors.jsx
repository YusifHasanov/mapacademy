"use client";
import { useState } from "react";

const mentorsData = [
  {
    name: "Ali Karimov",
    role: "Front-end developer",
    image: "/mentors/ali.JPG",
    description:
      "Ali is a skilled front-end developer with over 5 years of experience in building responsive and user-friendly web applications. He specializes in React and Next.js.",
  },
  {
    name: "Yusif Hasanov",
    role: "Full stack developer",
    image: "/mentors/yusif.JPG",
    description:
      "Yusif is a full stack developer proficient in both front-end and back-end technologies. He has extensive experience with Node.js, MongoDB, and Express.",
  },
  {
    name: "Senan Qurbanov",
    role: "Back-end developer",
    image: "/mentors/senan.JPG",
    description:
      "Senan is a highly experienced back-end developer with expertise in microservices, Spring Boot, and database management systems like PostgreSQL.",
  },
  {
    name: "Author Card",
    role: "Card with Author avatar, complete name and time to read",
    image:"/mentors/dunay.jpg",
    description:
      "This card provides information about the author and is used as a sample layout for blogs or similar content.",
  },
];
const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const openModal = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closeModal = () => {
    setSelectedMentor(null);
  };

  return (
    <section className="py-16 md:px-12 lg:px-20 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 md:mb-0">
          Təcrübəli
          <br />
          Təlimçilərimiz
        </h2>
        <button
          className="px-6 py-3 bg-[#A38FFD] text-white font-medium rounded-md shadow-md hover:bg-[#8F79E3] focus:outline-none"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          Learn More
        </button>
      </div>
      <div className="grid mx-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentorsData.map((mentor, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden relative card h-80 rounded-lg shadow-lg group"
            onClick={() => openModal(mentor)}
          >
            {/* Mentor Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${mentor.image})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-50"></div>

            {/* Mentor Info */}
            <div className="relative z-10 p-4 flex flex-col justify-end h-full">
              <h3 className="text-white text-2xl font-bold transition-colors duration-300 group-hover:text-white">
                {mentor.name}
              </h3>
              <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-gray-100">
                {mentor.role}
              </p>
            </div>
          </div>
        ))}


      </div>

      {/* Modal */}
      {selectedMentor && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-out opacity-100"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-3xl w-full relative shadow-lg transform transition-transform duration-300 ease-out scale-100 flex"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fadeInScale 0.3s ease" }}
          >
            {/* Left Image Section */}
            <div className="w-1/2">
              <img
                src={selectedMentor.image}
                alt={selectedMentor.name}
                className="rounded-md h-full object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-1/2 pl-6 relative">
              <h2 className="text-3xl font-bold mb-2">{selectedMentor.name}</h2>
              <p className="text-lg font-semibold mb-4 text-gray-700">
                {selectedMentor.role}
              </p>
              <p className="text-sm text-gray-600">
                {selectedMentor.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
    </section>
  );
};

export default Mentors;
