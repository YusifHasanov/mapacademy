import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="text-2xl font-semibold text-black">
          FT Learning
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-gray-800">
          <a href="#" className="hover:text-black">Courses</a>
          <a href="#" className="hover:text-black">Freebie</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">Contacts</a>
          <a href="#" className="hover:text-black">Log In</a>
        </div>

        {/* Register Button */}
        <div>
          <a href="#" className="px-6 py-2 bg-purple-300 text-purple-900 rounded-full hover:bg-purple-400 transition">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
