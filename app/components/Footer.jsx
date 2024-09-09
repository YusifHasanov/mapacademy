const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-10 lg:px-20">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Map Academy</h3>
        {/* <p className="text-gray-400">Haqqında səhifəsi təşkilatınızın necə başladığını, necə inkişaf etdiyini və sizi irəli aparan ideyaları izah etmək üçün mükəmməl bir məkandır.</p> */}
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Ünvan</h3>
        <p className="text-gray-400">Azadlıq prospekti 28, Bakı, Azərbaycan</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Əlaqə</h3>
        <p className="text-gray-400">+994 55 491 24 00</p>
        {/* <p className="text-gray-400">nümunə@example.com</p> */}
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Ofis Saatları</h3>
        <p className="text-gray-400">Bazar ertəsi - Şənbə</p>
        <p className="text-gray-400">9:00 - 18:00</p>
      </div>
    </div>
    <div className="border-t border-gray-700 px-4 mt-10 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; 2024 FT Learning. Bütün hüquqlar qorunur.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Şərtlər</a>
          <a href="#" className="hover:text-white">Məxfilik</a>
          <a href="#" className="hover:text-white">Əlaqə</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
