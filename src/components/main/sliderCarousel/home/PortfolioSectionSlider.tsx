"use client"

import { useState } from "react"
import Image from "next/image"

type Slide = {
    id: number
    image: string
}

const slides: Slide[] = [
    { id: 1, image: "/images/home/portfolio-section/slider-images/slide-img-1.png" },
    { id: 2, image: "/images/home/portfolio-section/slider-images/slide-img-2.png" },
    { id: 3, image: "/images/home/portfolio-section/slider-images/slide-img-3.png" },
    { id: 4, image: "/images/home/portfolio-section/slider-images/slide-img-4.png" },
]

export default function PortfolioSectionSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToSlide = (index: number) => {
        let newIndex = index
        if (index < 0) newIndex = slides.length - 1
        if (index >= slides.length) newIndex = 0
        setCurrentIndex(newIndex)
    }

    const formatPaginationNumber = (num: number): string =>
        num < 10 ? `0${num}` : `${num}`

    return (
        <div className="relative w-full overflow-hidden mt-[40px]">
            <div className="relative flex items-center justify-center w-full">
                <div
                    className="flex items-center gap-[24px] transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 578}px)` }} // 554px width + 24px gap
                >
                    {slides?.map((slide) => (
                        <div key={slide?.id} className="relative h-[390px] w-[554px] rounded-[16px] overflow-hidden shrink-0">
                            <Image
                                src={slide?.image}
                                width={554}
                                height={390}
                                alt="slider images"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* slider bottom , indication, and navigation ==================> */}
            <div className="flex items-center my-[24px] px-[150px] justify-between relative">
                <div></div>
                <div className="flex justify-center items-center gap-[8px]">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-[50px] h-[4px] rounded-[3px] ${index === currentIndex
                                ? "bg-gradient-to-r from-primary-start to-primary-end"
                                : "bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)]"
                                }`}
                        />
                    ))}
                </div>

                <div>
                    <div className="flex items-center gap-[12px]">
                        <button
                            onClick={() => goToSlide(currentIndex - 1)}
                            className="w-[32px] h-[32px] p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
                            aria-label="Previous slide"
                        >
                            <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>

                        <div className="flex items-baseline w-[36px]">
                            <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                {formatPaginationNumber(currentIndex + 1)}
                            </p>
                            <p className="text-sm">/{formatPaginationNumber(slides.length)}</p>
                        </div>

                        <button
                            onClick={() => goToSlide(currentIndex + 1)}
                            className="w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}