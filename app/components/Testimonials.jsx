"use client"
import React, { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Raju',
        role: 'UI UX Designer',
        text: 'The instructor was knowledgeable and engaging, and I learned a lot in this course.',
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg' // Replace with the path to the actual image
    },
    {
        id: 12,
        name: 'dsa',
        role: 'UI dasdasd dasda',
        text: 'ldaslkmd ammasdd sndamsa',
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg' // Replace with the path to the actual image
    }
    // Add more testimonials here as needed
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    return (
        <div className="w-full bg-white flex items center p-8 px-12">
            <div className="text-center">
                <h2 className="text-xl text-left font-bold text-gray-700">Feedback</h2>
                <h3 className="text-5xl text-left text-black font-semibold mt-2">What Our Students Say</h3>
            </div>

            <div className="mt-8 relative fe">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 absolute inset-0'
                            }`}
                    >
                        <blockquote className="text-lg text-center text-gray-600">
                            &ldquo;{testimonial.text}&rdquo;
                        </blockquote>
                        <div className="mt-4 flex items-center justify-center">
    
                            <div class="flex  items-center gap-4">
                                <img class="w-12 h-12 rounded-full" src={testimonial.image} alt=""/>
                                    <div class="font-medium  dark:text-white">
                                        <div>Jese Leos</div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                                    </div>
                            </div>

                            <div className="ml-4 text-left">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
                >
                    <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none ml-4"
                >
                    <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
