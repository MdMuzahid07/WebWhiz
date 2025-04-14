// import Image from "next/image";
// import React from "react";

// export default function BlogSection() {
//     return (
//         <section className="max-w-[1440px] mx-auto bg-background px-[24px] sm:px-[32px] lg:px-[150px]  pb-[42px] lg:pb-[76px]">
//             <div className="flex flex-col-reverse sm:flex-row gap-[24px] lg:gap-[70px]">


//                 <div className="min-h-[400px] sm:h-[400px] xl:h-[586px] flex items-end relative mb-[42px] sm:mb-[0px]">
//                     <figure className="w-[247px] sm:w-[247px] xl:w-[369px] h-[348px] xl:h-[510px] absolute left-[40px] sm:left-[46.5px] xl:left-[92.5px] bottom-[36px] sm:bottom-[52px]  xl:bottom-[76px] z-10">
//                         <Image
//                             src="/images/home/blog-section/tab-in-hand.png"
//                             width={369}
//                             height={510}
//                             alt="tab in hand image"
//                             className="w-full h-full rounded-[6.606px] lg:rounded-[12px]"
//                         />

//                         {/* // slider indicator  */}
//                         <div className="flex justify-center items-center gap-[8px] mt-[16px] xl:mt-[32px]">
//                             <div
//                                 className={`w-[50px] h-[4px] rounded-[3px] bg-gradient-to-r from-primary-start to-primary-end`}
//                             />
//                             <div
//                                 className={`w-[50px] h-[4px] rounded-[3px] bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)]
//                                `}
//                             />

//                             <div
//                                 className={`w-[50px] h-[4px] rounded-[3px]  bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)]
//                                 }`}
//                             />
//                         </div>

//                     </figure>

//                     <div className="w-[327px] h-[287px] sm:w-[340px] xl:w-[554px] sm:h-[287px] xl:h-[450px] rounded-[16px] bg-[#EDEEFB] relative z-0"></div>

//                     <div className="absolute bottom-0 -mb-[63px] flex justify-center w-full">
//                         {/* slider navigation buttons */}
//                         <div className="flex sm:hidden items-center gap-[12px] mt-[24px] lg:mt-[42px] sm:mb-[84px] lg:mb-[62px]">
//                             <button
//                                 className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
//                                 aria-label="Previous slide"
//                             >
//                                 <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
//                                         <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                             </button>

//                             <div className="flex items-baseline w-[36px]">
//                                 <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
//                                     01
//                                 </p>
//                                 <p className="text-[11.5px]">/05</p>
//                             </div>

//                             <button
//                                 className="cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
//                                 aria-label="Next slide"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                     <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="flex items-end  sm:h-[400px] xl:h-[586px] w-full">

//                     <div>
//                         <h1 className="text-caption text-center sm:text-left text-[14px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">Blog</h1>

//                         <h1 className="max-w-[327px] w-full md:max-w-[330px] lg:max-w-[516px] text-[24px] xl:text-[40px] font-bold leading-[140%] text-center sm:text-left mb-8 sm:mb-[16px]">
//                             <span className="mr-2">
//                                 Our
//                             </span>
//                             <span className="relative inline-block">
//                                 <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
//                                     satisfied customers
//                                 </span>
//                                 <Image
//                                     src="/images/home/portfolio-section/creative-innovation-bg.png"
//                                     alt=""
//                                     width={377}
//                                     height={12}
//                                     className="absolute bottom-[11px] sm:bottom-[9px] lg:bottom-[14px] left-[0px] object-cover z-0 h-[12px]"
//                                     priority
//                                 />
//                             </span>
//                             <span>
//                                 share their stories
//                             </span>
//                         </h1>


//                         <div className="w-full sm:max-w-[364px] lg:max-w-[516px] ">
//                             <div className="sm:flex sm:items-center sm:gap-[12px]">
//                                 <div className="sm:h-[54px] lg:h-[76px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
//                                 </div>

//                                 <p className="w-full hidden h-[74px] xl:flex text-body text-[16px] font-normal leading-[160%]">
//                                     The team consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology
//                                 </p>

//                                 <p className="w-full hidden md:flex xl:hidden text-body text-[16px] font-normal leading-[160%] line-clamp-2 overflow-hidden max-h-[54px]">
//                                     The team outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology
//                                 </p>

//                                 <p className="w-full flex md:hidden  text-center text-body text-[16px] font-normal leading-[160%]">
//                                     The team consistently delivered outstanding results surpassing our expectations in terms
//                                 </p>

//                             </div>
//                         </div>

//                         {/* slider navigation buttons */}
//                         <div className="hidden sm:flex items-center gap-[12px] mt-[24px] lg:mt-[42px] sm:mb-[84px] lg:mb-[62px]">
//                             <button
//                                 className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
//                                 aria-label="Previous slide"
//                             >
//                                 <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
//                                         <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                             </button>

//                             <div className="flex items-baseline w-[36px]">
//                                 <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
//                                     01
//                                 </p>
//                                 <p className="text-[11.5px]">/05</p>
//                             </div>

//                             <button
//                                 className="cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
//                                 aria-label="Next slide"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                     <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                 </div>


//             </div>
//         </section>
//     )
// }



"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function BlogSection() {
    // Image slides data - only images will change
    const imageSlides = [
        "/images/home/blog-section/tab-in-hand.png",
        "/images/home/blog-section/tab-in-hand.png",
        "/images/home/blog-section/tab-in-hand.png/",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === imageSlides.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? imageSlides.length - 1 : prev - 1
        );
    };

    return (
        <section className="max-w-[1440px] mx-auto bg-background px-[24px] sm:px-[32px] lg:px-[150px] pb-[42px] lg:pb-[76px]">
            <div className="flex flex-col-reverse sm:flex-row gap-[24px] lg:gap-[70px]">
                <div className="min-h-[400px] sm:h-[400px] xl:h-[586px] flex items-end relative mb-[42px] sm:mb-[0px]">
                    <figure className="w-[247px] sm:w-[247px] xl:w-[369px] h-[348px] xl:h-[510px] absolute left-[40px] sm:left-[46.5px] xl:left-[92.5px] bottom-[36px] sm:bottom-[52px] xl:bottom-[76px] z-10">
                        <Image
                            src={imageSlides[currentImageIndex]}
                            width={369}
                            height={510}
                            alt="Customer story"
                            className="w-full h-full rounded-[6.606px] lg:rounded-[12px]"
                        />

                        {/* slider indicator */}
                        <div className="flex justify-center items-center gap-[8px] mt-[16px] xl:mt-[32px]">
                            {imageSlides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-[50px] h-[4px] rounded-[3px] ${index === currentImageIndex
                                        ? "bg-gradient-to-r from-primary-start to-primary-end"
                                        : "bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)]"
                                        }`}
                                />
                            ))}
                        </div>
                    </figure>

                    <div className="w-[327px] h-[287px] sm:w-[340px] xl:w-[554px] sm:h-[287px] xl:h-[450px] rounded-[16px] bg-[#EDEEFB] relative z-0"></div>

                    <div className="absolute bottom-0 -mb-[63px] flex justify-center w-full">
                        {/* Mobile slider navigation buttons */}
                        <div className="flex sm:hidden items-center gap-[12px] mt-[24px] lg:mt-[42px] sm:mb-[84px] lg:mb-[62px]">
                            <button
                                onClick={prevImage}
                                className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
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
                                    {String(currentImageIndex + 1).padStart(2, '0')}
                                </p>
                                <p className="text-[11.5px]">/{String(imageSlides.length).padStart(2, '0')}</p>
                            </div>

                            <button
                                onClick={nextImage}
                                className="cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
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

                <div className="flex items-end sm:h-[400px] xl:h-[586px] w-full">
                    <div>
                        <h1 className="text-caption text-center sm:text-left text-[14px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">Blog</h1>

                        <h1 className="max-w-[327px] w-full md:max-w-[330px] lg:max-w-[516px] text-[24px] xl:text-[40px] font-bold leading-[140%] text-center sm:text-left mb-8 sm:mb-[16px]">
                            <span className="mr-2">
                                Our
                            </span>
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                    satisfied customers
                                </span>
                                <Image
                                    src="/images/home/portfolio-section/creative-innovation-bg.png"
                                    alt=""
                                    width={377}
                                    height={12}
                                    className="absolute bottom-[11px] sm:bottom-[9px] lg:bottom-[14px] left-[0px] object-cover z-0 h-[12px]"
                                    priority
                                />
                            </span>
                            <span>
                                share their stories
                            </span>
                        </h1>

                        <div className="w-full sm:max-w-[364px] lg:max-w-[516px]">
                            <div className="sm:flex sm:items-center sm:gap-[12px]">
                                <div className="sm:h-[54px] lg:h-[76px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                                </div>

                                <p className="w-full hidden h-[74px] xl:flex text-body text-[16px] font-normal leading-[160%]">
                                    The team consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology
                                </p>

                                <p className="w-full hidden md:flex xl:hidden text-body text-[16px] font-normal leading-[160%] line-clamp-2 overflow-hidden max-h-[54px]">
                                    The team outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology
                                </p>

                                <p className="w-full flex md:hidden text-center text-body text-[16px] font-normal leading-[160%]">
                                    The team consistently delivered outstanding results surpassing our expectations in terms
                                </p>
                            </div>
                        </div>

                        {/* Desktop slider navigation buttons */}
                        <div className="hidden sm:flex items-center gap-[12px] mt-[24px] lg:mt-[42px] sm:mb-[84px] lg:mb-[62px]">
                            <button
                                onClick={prevImage}
                                className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
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
                                    {String(currentImageIndex + 1).padStart(2, '0')}
                                </p>
                                <p className="text-[11.5px]">/{String(imageSlides.length).padStart(2, '0')}</p>
                            </div>

                            <button
                                onClick={nextImage}
                                className="cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
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
        </section>
    )
}