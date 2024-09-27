const WhyChooseUs = () => {
  return (
    <div className=" why-choose-us py-16 px-8 ">
      <div className="container mx-auto">

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-3  md:grid-cols-2 gap-8">
          <div className=" bg-white rounded-2xl md:col-span-2 p-6  shadow-md text-centerbg-purple-50 flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl text-black font-bold mb-4">Niye bizim kursu seçməlisiniz?</h2>
              <p className="text-gray-600 mb-6">
                Bizim kurslar praktik və müasir tədris metodları ilə təmin olunur.
                Təcrübəli və peşəkar təlimçilərdən bilik və bacarıqlar əldə edəcəksiniz.
                Real layihələr üzərində işləyərək, iş təcrübəsi qazanma imkanı əldə edirsiniz.
                Kursumuzda şəxsi inkişafınıza və karyera məqsədlərinizə uyğun xüsusi dəstək göstərilir.
              </p>
              <button
                className="px-6 py-3 bg-[#A38FFD] transition text-white font-medium rounded-md shadow-md hover:bg-[#8F79E3] focus:outline-none"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                Learn More
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img src="data:image/jpeg;base64,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" alt="Program Illustration" className="max-w-xs" />
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full"> 
                <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>
            <h3 className="text-lg font-bold mb-2">Backend təlimlərimiz</h3>
            <p className="text-gray-600">
              Backend təlimlərimizə Java, Spring Boot, Python, Django və SQL kimi texnologiyalar daxildir.
              Mikroservis arxitekturası, API dizaynı və təhlükəsizlik üzrə dərin biliklər əldə edəcəksiniz.
              Kursumuzda backend proqramlaşdırma dilləri və alətlərinin praktik tətbiqi ilə təcrübə qazanacaqsınız.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">FrontEnd təlimlərimiz</h3>
            <p className="text-gray-600">
              Frontend təlimlərimiz HTML, CSS, JavaScript, React, və Angular kimi texnologiyaları əhatə edir.
              Rəqəmsal dizayn və istifadəçi təcrübəsi (UX/UI) üzrə nəzəri və praktiki biliklər əldə edəcəksiniz.
              Dinamik və adaptiv veb saytların yaradılması üzrə bacarıqlarınızı inkişaf etdirəcəksiniz.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Flexible Time</h3>
            <p className="text-gray-600">
              Flexible time, also known as flextime or flexi-time, refers to a work schedule that allows employees to
              have some control over their starting and ending times.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Flexible Time</h3>
            <p className="text-gray-600">
              Flexible time, also known as flextime or flexi-time, refers to a work schedule that allows employees to
              have some control over their starting and ending times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
