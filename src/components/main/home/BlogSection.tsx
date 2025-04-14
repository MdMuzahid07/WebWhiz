import Image from "next/image";
import React from "react";

export default function BlogSection() {
    return (
        <section className="max-w-[1440px] mx-auto bg-background px-[24px] sm:px-[32px] lg:px-[150px]  pb-[42px] lg:pb-[76px]">
            <div className="flex flex-col sm:flex-row gap-[24px] lg:gap-[70px]">


                <div className="h-[586px] flex items-end relative">

                    <figure className="w-[369px] h-[510px] absolute left-[92.5px]  bottom-[76px] z-10">
                        <Image
                            src="/images/home/blog-section/tab-in-hand.png"
                            width={369}
                            height={510}
                            alt="tab in hand image"
                            className="w-full h-full rounded-[6.606px] lg:rounded-[12px]"
                        />

                        {/* // slider indicator  */}
                        <div className="flex justify-center items-center gap-[8px] mt-[32px]">
                            <div
                                className={`w-[50px] h-[4px] rounded-[3px] bg-gradient-to-r from-primary-start to-primary-end`}
                            />
                            <div
                                className={`w-[50px] h-[4px] rounded-[3px] bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)]
                               `}
                            />

                            <div
                                className={`w-[50px] h-[4px] rounded-[3px]  bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)]
                                }`}
                            />
                        </div>

                    </figure>

                    <div className="w-[554px] h-[450px] rounded-[16px] bg-[#EDEEFB] relative z-0"></div>
                </div>



                <div>


                    <div>
                        <h1 className="text-caption text-center sm:text-left text-[14px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">Blog</h1>

                        <h1 className="max-w-[327px] w-full md:max-w-[330px] lg:max-w-[516px] text-[24px] lg:text-[40px] font-bold leading-[140%] text-center sm:text-left mb-[8px] sm:mb-[0px]">
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


                        <div className="w-full sm:max-w-[364px] lg:max-w-[516px] mt-[8px] sm::mt-[16px] ">
                            <div className="sm:flex sm:items-center sm:gap-[12px]">
                                <div className="sm:h-[54px] lg:h-[74px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                                </div>

                                <p className="w-full hidden h-[74px] lg:flex text-body text-[16px] font-normal leading-[160%]">
                                    The team consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology
                                </p>

                                <p className="w-full hidden md:flex lg:hidden text-body text-[16px] font-normal leading-[160%] line-clamp-2 overflow-hidden max-h-[54px]">
                                    The team outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology
                                </p>

                                <p className="w-full flex md:hidden  text-center text-body text-[16px] font-normal leading-[160%]">
                                    The team  consistently delivered outstanding results surpassing our expectations in terms
                                </p>

                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </section>
    )
}
