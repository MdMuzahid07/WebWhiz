import Image from "next/image";
import PortfolioSectionSlider from "../sliderCarousel/home/PortfolioSectionSlider";

export default function PortfolioSection() {
    return (
        <section className="max-w-[1440px] mx-auto lg:pt-[29px]">
            <div className="relative w-full h-full  min-h-[740px] bg-secondary/4">
                <div className="px-[24px] sm:px-[32px] xl:px-[140px]">

                    <h1 className="text-caption text-[14px] pt-[32px] lg:pt-[80px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">portfolio</h1>

                    <div className="flex justify-center md:justify-start flex-col md:flex-row md:items-center lg:items-start xl:gap-[81px]">

                        {/* // for desktop  */}
                        <div className="flex md:hidden lg:flex">
                            <h1 className="min-w-[327px] md:w-[339px] lg:w-[554px] text-[24px] lg:text-[40px] font-bold leading-[140%]">
                                <span className="mr-2">
                                    Discovering digital mastery and
                                </span>
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                        Creative innovation
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
                            </h1>
                        </div>


                        {/* // for tablet  */}
                        <div className=" hidden md:flex lg:hidden">
                            <h1 className=" min-w-[327px] md:w-[339px] lg:w-[554px] text-[28px]  font-bold leading-[140%]">
                                <span className="mr-2">
                                    Discovering digital mastery and
                                </span>
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                        Creative
                                    </span>
                                    <Image
                                        src="/images/home/portfolio-section/creative-innovation-bg.png"
                                        alt=""
                                        width={114}
                                        height={12}
                                        className="absolute bottom-[11px] sm:bottom-[9px] lg:bottom-[14px] left-[0px] object-cover z-0 h-[12px]"
                                        priority
                                    />
                                </span>

                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                        innovation
                                    </span>
                                    <Image
                                        src="/images/home/portfolio-section/creative-innovation-bg.png"
                                        alt=""
                                        width={141}
                                        height={12}
                                        className="absolute bottom-[11px] sm:bottom-[9px] lg:bottom-[14px] left-[0px] object-cover z-0 h-[12px]"
                                        priority
                                    />
                                </span>
                            </h1>
                        </div>



                        <div className="w-full sm:max-w-[364px] lg:max-w-[514px]">
                            <div className="sm:flex sm:items-center sm:gap-[12px]">
                                <div className="sm:h-[54px] lg:h-[64px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                                </div>

                                <p className="w-full hidden lg:flex text-body text-[16px] font-normal leading-[160%]">
                                    In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.
                                </p>

                                <p className="w-full hidden md:flex lg:hidden text-body text-[16px] font-normal leading-[160%]">
                                    In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated...
                                </p>

                                <p className="w-full flex md:hidden  text-center text-body text-[16px] font-normal leading-[160%]">
                                    In our portfolio section, you&apos;ll embark on a visual journey through a meticulously
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="overflow-x-auto">
                        <div className="w-full min-w-[560px] flex items-center gap-[24px] mt-[16px]">
                            <button
                                className="w-[100px] relative h-[42px] py-[8px] px-[12px] text-[16px] font-medium capitalize leading-[150%] flex justify-center items-center cursor-pointer "
                            >
                                All Project
                                <div className="sm:h-[2px] absolute bottom-0 w-full bg-gradient-to-r from-primary-start to-primary-end">
                                </div>
                            </button>

                            <button
                                className="w-[121px] relative h-[42px] py-[8px] px-[12px] text-[16px]  capitalize leading-[160%] flex justify-center items-center cursor-pointer "
                            >
                                UI/UX Design
                                <div className="sm:h-[2px] absolute bottom-0 w-full bg-none">
                                </div>
                            </button>

                            <button
                                className="w-[136px] relative h-[42px] py-[8px] px-[12px] text-[16px]  capitalize leading-[160%] flex justify-center items-center cursor-pointer"
                            >
                                Graphic Design
                                <div className="sm:h-[2px] absolute bottom-0 w-full bg-none">
                                </div>
                            </button>

                            <button
                                className="w-[131px] relative h-[42px] py-[8px] px-[12px] text-[16px]  capitalize leading-[160%] flex justify-center items-center cursor-pointer"
                            >
                                Developments
                                <div className="sm:h-[2px] absolute bottom-0 w-full bg-none">
                                </div>
                            </button>
                        </div>
                    </div>


                </div>


                <PortfolioSectionSlider />


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
