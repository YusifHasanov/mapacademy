const Header = () => (
  <header className="flex justify-between items-center py-6 px-10 bg-white shadow-md">
    <div className="text-2xl font-bold text-black">FT Learning</div>
    <nav className="flex space-x-8 text-lg">
      <a href="#" className="text-gray-700">Courses</a>
      <a href="#" className="text-gray-700">Freebie</a>
      <a href="#" className="text-gray-700">Pricing</a>
      <a href="#" className="text-gray-700">Contacts</a>
    </nav>
    <div className="flex space-x-4 items-center">
      <a href="#" className="text-gray-700">Log In</a>
      <a href="#" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg">Register</a>
    </div>
  </header>
);

export default Header;
