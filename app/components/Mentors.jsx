"use client";
import Image from "next/image";
import { cn } from "../lib/utils";


const Mentors = () => (
    <section className="py-16   md:px-12 lg:px-20 bg-gray-50">
        <div className={"flex flex-row xs:flex-col xs:mb-0 mb-5  xs:justify-center items-center justify-between"}>
            <h2 className="text-left xs:text-left text-5xl font-bold text-black mb-6 xs:mb-12">Tecrubeli 
                <br/>
               Telimcilerimiz </h2>
            {/* <button
                className="bg-purple-400 text-white px-5 py-2 rounded-xl shadow-md hover:bg-purple-500 transition">
                Learn More
            </button> */}
      <button
          className="px-6 py-3 xs:px-4 xs:py-2 bg-[#A38FFD] text-white font-medium rounded-md shadow-md hover:bg-[#8F79E3] focus:outline-none"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          Learn More
        </button>

        </div>
        <div className="flex flex-wrap justify-center md:justify-between">
            <div className="max-w-xs w-full xs:mb-0 mb-8  group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl bg-[url(/mentors/ali.JPG)] bg-cover"
                    )}
                >
                    <div
                        className="absolute w-full  h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    </div>
                    <div className="text content">
                        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                            Ali Karimov
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                            Front-end developer
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs w-full xs:mb-0 mb-8  group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl  bg-[url(/mentors/yusif.JPG)] bg-cover"
                    )}
                >
                    <div
                        className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    </div>
                    <div className="text content">
                        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                            Yusif Hasanov
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                           Full stack developer
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs w-full xs:mb-0 mb-8 group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl bg-[url(/mentors/senan.JPG)] bg-cover"
                    )}
                >
                    <div
                        className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    </div>
                    <div className="text content">
                        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                            Senan Qurbanov
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                            Back-end deeveloper
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs w-full xs:mb-0 mb-8 group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl bg-[url(https://media.istockphoto.com/id/1626853870/photo/a-focused-businessman-working-on-his-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=1qUGOEXwDcMj543oDxfUYHtL7LsUY8_26pnpV2EeLxE=)] bg-cover"
                    )}
                >
                    <div
                        className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    </div>
                    <div className="text content">
                        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                            Author Card
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                            Card with Author avatar, complete name and time to read - most
                            suitable for blogs.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </section>
);

export default Mentors;
  