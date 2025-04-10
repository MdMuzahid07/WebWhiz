"use client";
import Image from "next/image";
import { useState } from "react";

const slides = [
    "/images/home/portfolio-section/slider-images/slide-img-1.png",
    "/images/home/portfolio-section/slider-images/slide-img-2.png",
    "/images/home/portfolio-section/slider-images/slide-img-3.png",
    "/images/home/portfolio-section/slider-images/slide-img-4.png",
    "/images/home/portfolio-section/slider-images/slide-img-5.png",
];

const PortfolioSectionSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full mt-[40px]">
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-all duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((src, index) => (
                        <div key={index} className="min-w-full px-2 md:px-6">
                            <div className="rounded-xl overflow-hidden shadow-lg relative">
                                <Image
                                    width={554}
                                    height={390}
                                    src={src}
                                    alt={`slide image ${index + 1}`}
                                    className="w-[554px] h-[390px] rounded-[16px] object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="absolute inset-x-0 bottom-2 flex justify-end items-center gap-6">
                    {/* Prev Button */}
                    <button onClick={prevSlide} className="bg-white border rounded-full p-2 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6.38 3.95L2.33 8L6.38 12.05" stroke="url(#prevGradient1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.67 8H2.45" stroke="url(#prevGradient2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="prevGradient1" x1="2.53" y1="4.83" x2="6.83" y2="5.17" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#5F90F0" />
                                    <stop offset="1" stopColor="#185AD9" />
                                </linearGradient>
                                <linearGradient id="prevGradient2" x1="2.99" y1="8.11" x2="5.91" y2="13.26" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#5F90F0" />
                                    <stop offset="1" stopColor="#185AD9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>

                    <span className="text-sm font-semibold">
                        {String(currentIndex + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
                    </span>

                    <button onClick={nextSlide} className="bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full p-2 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.62 3.95L13.67 8L9.62 12.05" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.33 8H13.55" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSectionSlider;
