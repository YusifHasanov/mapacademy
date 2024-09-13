'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        quote: "Bu kurs həyatımı dəyişdi! Müəllimlər çox peşəkardır və dərslər anlaşılan tərzdə izah olunur. Hər tapşırıq mənim proqramlama bacarıqlarımı daha da inkişaf etdirdi.",
        name: "Tural M.",
        role: "Backend Developer",
        image: "https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg",
    },
    {
        quote: "Mən əvvəllər proqramlama ilə heç vaxt məşğul olmamışdım, lakin burada hər şeyi başa düşmək mümkün oldu..",
        name: "Elmir S.",
        role: "Backend Developer",
        image: "https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg",
    },
    {
        quote: "Müəllimlərin dəstəyi və kurs materiallarının keyfiyyəti məni çox təəccübləndirdi. Mən çox şey öyrəndim və indi öz şəxsi layihələrim üzərində işləyirəm.",
        name: "Aysel H.",
        role: "Frontend Developer",
        image: "https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg",
    },
];

const Testimonial = () => {
    const swiperRef = useRef(null); // Ref to access Swiper instance

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
       <section className='w-full'>
         <div className="p-4 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto flex flex-col items-start">
            {/* Left static part */}
            <div className="text-left pr-6 mb-6 md:mb-0 w-full md:w-1/3">
                <p className="text-gray-500 uppercase text-sm font-semibold mb-2">Feedback</p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Tələbələrimiz nə deyir
                </h2>
                <img src='/comma.jpeg' className="w-12 h-12 md:w-16 md:h-16" />
            </div>

            {/* Swiper component */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true} // Enables looping
                className="w-full md:w-2/3"
                ref={swiperRef} // Attach ref to the Swiper component
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-start justify-between mx-8 relative">
                            {/* Left Section for Text and Profile */}
                            <div className="flex flex-col mb-8 md:mb-0">
                                <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4">
                                    {testimonial.quote}
                                </p>

                                <div className="flex items-center mt-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-yellow-500"
                                    />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Static Navigation Buttons */}
            <div style={{
                zIndex:12122
            }} className="flex justify-end p-0 sm:pr-24 -mt-16 sm:-mt-9 w-full gap-4">
                <button
                    className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                    onClick={handlePrev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                    onClick={handleNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
       </section>
    );
};

export default Testimonial;
