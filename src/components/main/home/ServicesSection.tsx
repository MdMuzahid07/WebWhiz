import Image from 'next/image'
import React from 'react'

export default function ServicesSection() {
    return (
        <section className="max-w-[1440px] mx-auto  lg:pt-[29px] h-full sm:mt-[0px]">
            <div className="relative w-full h-full  bg-secondary/4">


                {/* // main container */}
                <div className="px-[24px] sm:px-[32px] xl:px-[150px]">


                    <h1 className="text-caption text-center sm:text-left text-[14px] pt-[32px] lg:pt-[80px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">Services</h1>

                    <div className="flex justify-center md:justify-start flex-col md:flex-row items-center lg:items-start xl:gap-[81px]">

                        <h1 className="max-w-[327px] w-full md:max-w-[339px] lg:max-w-[554px] text-[24px] lg:text-[40px] font-bold leading-[140%] text-center sm:text-left mb-[8px] sm:mb-[0px]">
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




                        <div className="w-full sm:max-w-[364px] lg:max-w-[514px] ">
                            <div className="sm:flex sm:items-center sm:gap-[12px]">
                                <div className="sm:h-[54px] lg:h-[64px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                                </div>

                                <p className="w-full hidden h-[74px] lg:flex text-body text-[16px] font-normal leading-[160%]">
                                    In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.
                                </p>

                                <p className="w-full hidden md:flex lg:hidden text-body text-[16px] font-normal leading-[160%] line-clamp-1 overflow-hidden max-h-[54px]">
                                    In our portfolio section, you&apos;ll embark on a visual journey through a meticulously cur...
                                </p>

                                <p className="w-full flex md:hidden  text-center text-body text-[16px] font-normal leading-[160%]">
                                    In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery
                                </p>

                            </div>
                        </div>

                    </div>



                </div>


                {/* // left side pyramid like absolute positioned png  */}
                <div className="hidden md:flex z-0 absolute w-full max-w-[278px] md:max-w-[400px] xl:max-w-[808px] bottom-0 left-0">
                    <Image
                        src="/images/home/portfolio-section/portfolio-section-bottom-left-vector.png"
                        width={808}
                        height={744}
                        alt="vector image"
                        className="w-full h-full"
                    />
                </div>

                {/* // right side pyramid like absolute positioned png  */}
                <div className="hidden md:flex z-0  absolute w-full max-w-[278px] md:max-w-[400px] xl:max-w-[632] bottom-0 right-0">
                    <Image
                        src="/images/home/portfolio-section/portfolio-section-bottom-right-vector.png"
                        width={808}
                        height={744}
                        alt="vector image"
                        className="w-full h-full"
                    />
                </div>

            </div>
        </section>
    )
}


