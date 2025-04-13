import Image from "next/image";

const skills = [
    { name: "Graphic Design", percentage: 65 },
    { name: "Lead Generation", percentage: 87 },
    { name: "Product Design", percentage: 45 },
    { name: "UI/UX design", percentage: 75 },
]


export default function AboutUsSection() {
    return (
        <section className="max-w-[1440px] mx-auto bg-white">
            <div className="my-[76px] px-[24px] sm:pl-[32px] xl:pl-[150px] sm:pr-[28px] xl:pr-[99px]">
                <h1 className="text-caption text-center sm:text-left text-[14px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">About us</h1>

                <div className="flex justify-center md:justify-start flex-col md:flex-row md:items-center lg:items-start gap-[8px] md:gap-[39px] xl:gap-[80px]">

                    <h1 className="min-w-[327px] md:w-[330px] lg:w-[554px] text-[24px] lg:text-[40px] font-bold leading-[140%] text-center sm:text-left">
                        <span>
                            We are turning products into
                        </span>
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                Timeless elegance
                            </span>
                            <Image
                                src="/images/home/portfolio-section/creative-innovation-bg.png"
                                alt=""
                                width={349}
                                height={12}
                                className="absolute bottom-[7.5px] w-[209px] xl:w-[349px] sm:bottom-[6px] lg:bottom-[14px] left-[6px] object-cover z-0 h-[12px]"
                                priority
                            />
                        </span>
                    </h1>



                    <div className="w-full min-w-[327px] sm:max-w-[334px] lg:max-w-[514px] mt-[5px]">
                        <div className="sm:flex sm:items-center sm:gap-[12px]">
                            <div className="sm:h-[54px] lg:h-[64px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                            </div>

                            <p className="w-full text-center sm:text-left hidden lg:flex text-body text-[16px] font-normal leading-[160%]">
                                In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.
                            </p>

                            <p className="w-full text-center sm:text-left hidden md:flex lg:hidden text-body text-[16px] font-normal leading-[160%] line-clamp-2">
                                In our portfolio section, you&apos;ll embark on a visual journey through a meticulously cur...
                            </p>

                            <p className="w-full text-center sm:text-left flex md:hidden text-body text-[16px] font-normal leading-[160%] mt-[8px]">
                                In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery
                            </p>

                        </div>
                    </div>

                </div>



                <div className="mt-[48px] flex flex-col items-center sm:flex-row gap-[24px] xl:gap-[32px]">


                    <div className=" w-full sm:max-w-[340px] lg:max-w-[554px] h-full sm:max-h-[308px] lg:h-[348px] rounded-[12px] bg-gradient-to-r from-primary-start/4 to-primary-end/4 p-[30px] lg:p-[50px]">

                        {
                            skills?.map((skill, index) => (
                                <div key={index} className="mb-[16px]">
                                    <div className="text-[16px] font-semibold leading-[150%] mb-[4px]">{skill?.name}</div>
                                    <div className="flex items-center sm:w-[236px] lg:w-[454px] h-[10px] lg:h-[22px] gap-[8px] lg:gap-[12px]">
                                        <div className="flex-grow h-[10px] bg-[linear-gradient(99deg,rgba(95,144,240,0.10)_5.67%,rgba(24,90,217,0.10)_98.08%)] rounded-full overflow-hidden">
                                            <div className="h-full bg-[linear-gradient(99deg,#5F90F0_5.67%,#185AD9_98.08%)] rounded-full" style={{ width: `${skill.percentage}%` }} />
                                        </div>
                                        <p className="text-[14px] leading-[160%] text-body">{skill?.percentage}%</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    <div className="w-full">
                        <div className="w-full max-w-[554px] h-[313px] relative">

                            {/* // desktop view  */}
                            <Image
                                src="/images/home/about-section/professional-team.png"
                                width={554}
                                height={313}
                                alt="professional team"
                                className=" hidden lg:flex w-full  h-full  rounded-[16px] overflow-hidden"
                            />

                            {/* // tablet,and mobile view  */}
                            <Image
                                src="/images/home/about-section/professional-team-tablet.png"
                                width={340}
                                height={256}
                                alt="professional team"
                                className="w-full sm:max-w-[327px] lg:w-full md:max-w-[340px] flex lg:hidden h-full  max-h-[256px]  rounded-[8px] overflow-hidden"
                            />


                            {/* // tablet, and mobile view  */}
                            <div className="absolute flex xl:hidden top-[188px] -right-[11px] md:right-0 min-w-full sm:max-w-[349px] h-[81px] p-[16px] -left-[11px] md:-left-[4.5px]  justify-between bg-[linear-gradient(99deg,#5F90F0_5.67%,#185AD9_98.08%)] rounded-[12px]">

                                <div className="text-center w-full text-white">
                                    <h1 className="text-[16px]  font-bold leading-[150%] xl:leading-[140%] ">58+</h1>
                                    <p className="text-[12px]  leading-[160%]">Project Delivery</p>
                                </div>
                                <div className="mx-[4px] xl:mx-[21px] rounded-[16px] w-[2px] h-[49px] xl:h-[60px] bg-[rgba(226,244,234,0.5)]"></div>
                                <div className="text-center w-full text-white">
                                    <h1 className="text-[16px]  font-bold leading-[150%] xl:leading-[140%] ">120+</h1>
                                    <p className="text-[12px]  leading-[160%]">Happy Clients</p>
                                </div>
                                <div className="mx-[4px] xl:mx-[21px] rounded-[16px] w-[2px] h-[49px] xl:h-[60px] bg-[rgba(226,244,234,0.5)]"></div>
                                <div className="text-center w-full text-white">
                                    <h1 className="text-[16px]  font-bold leading-[150%] xl:leading-[140%] ">32+</h1>
                                    <p className="text-[12px]  leading-[160%]">Yours Experience</p>
                                </div>
                            </div>


                            {/* // desktop view  */}
                            <div className="absolute hidden xl:flex bottom-[39px] right-0 lg:-right-[51px] lg:-bottom-[54px] w-[349px] lg:w-[531px] h-[81px] lg:h-[124px] p-[16px] lg:p-[32px]justify-between bg-[linear-gradient(99deg,#5F90F0_5.67%,#185AD9_98.08%)] rounded-[12px] items-center">
                                <div className="text-center w-full text-white">
                                    <h1 className="text-[16px] lg:text-[24px] font-bold leading-[150%] lg:leading-[140%] ">58+</h1>
                                    <p className="text-[12px] lg:text-[16px] leading-[160%]">Project Delivery</p>
                                </div>
                                <div className="mx-[8px] lg:mx-[21px] rounded-[16px] w-[2px] h-[49px] lg:h-[60px] bg-[rgba(226,244,234,0.5)]"></div>
                                <div className="text-center w-full text-white">
                                    <h1 className="text-[16px] lg:text-[24px] font-bold leading-[150%] lg:leading-[140%] ">120+</h1>
                                    <p className="text-[12px] lg:text-[16px] leading-[160%]">Happy Clients</p>
                                </div>
                                <div className="mx-[8px] lg:mx-[21px] rounded-[16px] w-[2px] h-[49px] lg:h-[60px] bg-[rgba(226,244,234,0.5)]"></div>
                                <div className="text-center w-full text-white">
                                    <h1 className="text-[16px] lg:text-[24px] font-bold leading-[150%] lg:leading-[140%] ">32+</h1>
                                    <p className="text-[12px] lg:text-[16px] leading-[160%]">Yours Experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}
