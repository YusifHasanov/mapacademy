const Testimonials = () => (
    <section className="py-16 px-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-12">What Our Students Say</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">"The instructor was knowledgeable and engaging, and I learned a lot in this course."</p>
        <div className="flex justify-center items-center space-x-4">
          <img src="/mentors/mentor1.png" alt="Student" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold">Raju</p>
            <span className="text-gray-500">UI UX Designer</span>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <button className="p-2 rounded-full bg-gray-200">←</button>
          <button className="p-2 rounded-full bg-gray-200">→</button>
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;
  