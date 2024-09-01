"use client";
import Image from "next/image";
import {cn} from "@/app/lib/utils";

const Mentors = () => (
    <section className="py-16  px-16 bg-gray-50">
        <div className={"flex items-center justify-between"}>
            <h2 className="text-center text-4xl font-bold text-black mb-12">Experienced Course Mentor</h2>
            <button
                className="bg-purple-400 text-white px-5 py-2 rounded-xl shadow-md hover:bg-purple-500 transition">
                Learn More
            </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs w-full  group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl bg-[url(https://images.unsplash.com/photo-1573497490790-9053816a01d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVtcGxveWVlfGVufDB8fDB8fHww)] bg-cover"
                    )}
                >
                    <div
                        className="absolute w-full  h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
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
            <div className="max-w-xs w-full group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl  bg-[url(https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVtcGxveWVlfGVufDB8fDB8fHww)] bg-cover"
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
            <div className="max-w-xs w-full group/card">
                <div
                    className={cn(
                        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                        "rounded-2xl bg-[url(https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVtcGxveWVlfGVufDB8fDB8fHww)] bg-cover"
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
            <div className="max-w-xs w-full group/card">
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
  