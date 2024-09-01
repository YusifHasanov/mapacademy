import React from 'react';

// Reusable Button Component
const Button = ({ children, icon, className }) => (
  <button className={`flex items-center py-2 px-4 rounded-md ${className}`}>
    {icon && <img src={icon} alt="" className="w-4 h-4 mr-2" />}
    {children}
  </button>
);

const HeroSection = () => {
  return (
    <section className="bg-white px-12 xs:px-5 py-12">
            <h1 className="text-5xl text-center  font-bold text-black leading-tight mb-6">
            Become A Professional <br /> In Your Sector
          </h1>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">

        {/* Left Section */}
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <ul className="text-lg font-medium space-y-3 mb-8">
            {['UI UX DESIGN', 'WEB DEVELOPMENT', 'DIGITAL MARKETING', 'PRACTICAL LEARNING'].map((item, index) => (
              <li key={index} className={item === 'DIGITAL MARKETING' ? 'text-black' : 'text-gray-400'}>
                {item}
              </li>
            ))}
          </ul>
          <Button className="bg-purple-300 text-purple-900 rounded-full hover:bg-purple-400 transition">
            Explore More
          </Button>
        </div>

        {/* Middle Image */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center">
          <img src="https://media.istockphoto.com/id/1384207765/vector/open-book-diary-with-white-paper-blank-pages-and-bookmark-3d-vector-icon-cartoon-minimal.jpg?s=612x612&w=0&k=20&c=-aryLPrZgniAbbPzbyrvigtuWva_FsKSuORMdwov8Go=" alt="Books with Apple" className="w-72 h-auto" />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/6 mt-8 lg:mt-0 flex flex-col items-center lg:items-end space-y-4">
          {[
            { value: '4.6', label: 'Overall Rating', color: 'text-yellow-500', icon: '⭐' },
            { value: '7.8M+', label: 'Students', color: 'text-blue-500', icon: '👥' },
            { value: '246', label: 'Instructor', color: 'text-pink-500', icon: '👨‍🏫' }
          ].map((stat, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className={`${stat.color} text-2xl`}>{stat.icon}</div>
            </div>
          ))}
          <div className="flex space-x-3 mt-4">
            <Button icon="path_to_apple_logo.png" className="bg-gray-200">
              Apple
            </Button>
            <Button icon="path_to_book_icon.png" className="bg-gray-200">
              Book
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
