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
    image:
      "https://media.istockphoto.com/id/1626853870/photo/a-focused-businessman-working-on-his-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=1qUGOEXwDcMj543oDxfUYHtL7LsUY8_26pnpV2EeLxE=",
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
      <div
        className={
          "flex flex-row xs:flex-col xs:mb-0 mb-5 xs:justify-center items-center justify-between"
        }
      >
        <h2 className="text-left xs:text-left text-5xl font-bold text-black mb-6 xs:mb-12">
          Tecrubeli
          <br />
          Telimcilerimiz
        </h2>
        <button
          className="px-6 py-3 xs:px-4 xs:py-2 bg-[#A38FFD] text-white font-medium rounded-md shadow-md hover:bg-[#8F79E3] focus:outline-none"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          Learn More
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between">
        {mentorsData.map((mentor, index) => (
          <div
            key={index}
            className="max-w-xs w-full xs:mb-0 mb-8 group/card"
            onClick={() => openModal(mentor)}
          >
            <div
              className={
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 " +
                "rounded-2xl bg-cover"
              }
              style={{ backgroundImage: `url(${mentor.image})` }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {mentor.name}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {mentor.role}
                </p>
              </div>
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
                className="rounded-md h-56 w-full object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-1/2 pl-6 relative">
              {/* Stylish Close Button */}
              {/* <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 focus:outline-none shadow-md transition-transform transform hover:scale-110"
              >
                &times;
              </button> */}
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
