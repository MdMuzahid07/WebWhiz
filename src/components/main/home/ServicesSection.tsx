import Image from 'next/image'
import React from 'react'

const services = [
    {
        title: "Graphic Design",
        description:
            "The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology to visually communicate ideas messages and concepts.",
        icon: "/images/home/services-section/pen-tool.svg",
    },
    {
        title: "UI/UX Design",
        description:
            "Our UI/UX design services are a harmonious blend of aesthetics and functionality. We specialize in crafting user experiences that captivate and interfaces that engage. Our team of dedicated designers and developers collaborate to create seamless.",
        icon: "/images/home/services-section/color-swatch.svg",
    },
    {
        title: "Development",
        description:
            "Development is where ideas evolve into powerful, functional, and scalable digital solutions. Our proficient development team is well-versed in the latest technologies and programming languages, crafting web and mobile applications .",
        icon: "/images/home/services-section/command.svg",
    },
    {
        title: "Digital Marketing",
        description:
            "Digital marketing is our expertise, your pathway to online success. We specialize in navigating the dynamic digital landscape, offering strategic marketing solutions to propel your brand. From search engine optimization (SEO) and social media.",
        icon: "/images/home/services-section/pen-tool.svg",
    },
];

const sendArrowIcon = "/images/home/services-section/send.svg";


export default function ServicesSection() {
    return (
        <section className="max-w-[1440px] mx-auto  lg:pt-[29px] h-full sm:mt-[0px]">
            <div className="relative w-full h-full  bg-secondary/4 pb-[24px] md:pb-[32px] lg:pb-[80px]">


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


                    {/* // cards  */}


                    <div className="mt-[24px] md:mt-[32px] lg:mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] lg:gap-[32px] ">

                        {
                            services?.map((service, index) => (
                                <div key={index + service?.title} className="border-[1px] border-background hover:border-primary-start w-full h-full md:max-w-[554px] max-h-[226px] lg:max-h-[311px] rounded-[32px] p-[24px] lg:p-[32px] bg-background  z-20">

                                    <div className="flex justify-between">
                                        <div className="w-[54px] lg:w-[80px] h-[54px] lg:h-[80px] rounded-[16px] p-[12px] flex justify-center items-center bg-secondary/10">
                                            <Image
                                                src={service?.icon}
                                                width={100}
                                                height={100}
                                                alt="service card icon image"
                                                className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]"
                                            />
                                        </div>
                                        <button className="w-[42px] cursor-pointer lg:w-[48px] h-[42px] lg:h-[48px] text-white bg-[linear-gradient(99deg,_#5F90F0_5.67%,_#185AD9_98.08%)] rounded-full p-[12px]">
                                            <Image
                                                src={sendArrowIcon}
                                                width={100}
                                                height={100}
                                                alt="service card icon image"
                                                className="w-[18px] lg:w-[24px] h-[18px] lg:h-[24px]"
                                            />
                                        </button>
                                    </div>

                                    <h1 className="mt-[12px] lg:mt-[16px] text-[20px] lg:text-[28px] font-bold leading-[140%] lg:leading-[150%] text-primary">
                                        {service?.title}
                                    </h1>

                                    <p className="mt-[4px] line-clamp-3 lg:line-clamp-4 lg:mt-[8px] text-[16px] leading-[160%] text-body">
                                        {service?.description}
                                    </p>
                                </div>
                            ))}

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


