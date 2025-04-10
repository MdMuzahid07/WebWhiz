import Image from "next/image";

export default function PortfolioSection() {
    return (
        <section className="max-w-[1440px] mx-auto relative bg-secondary/4 mt-[29px] min-h-[744px]">

            <div className="px-[24px] sm:px-[32px] xl:px-[140px]">
                <h1 className="text-caption text-[14px] pt-[80px] font-semibold leading-[160%] tracking-[1.68px] uppercase mb-[4px]">portfolio</h1>

                <div className="flex justify-between items-center">
                    <h1 className="min-w-[327px] md:w-[339px] lg:w-[554px] text-[24px] md:text-[28px] lg:text-[40px] font-bold leading-[140%]">
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
                                height={20}
                                className="absolute bottom-[11px] sm:bottom-[9px] lg:bottom-[14px] left-[0px] object-cover z-0"
                                priority
                            />
                        </span>
                    </h1>

                </div>




                <div className="max-w-[514px]">

                </div>



            </div>



            {/* // left side pyramid like absolute positioned svg  */}
            <div className="absolute bottom-0 -left-[24px]">
                <svg className="pt-[42px]" xmlns="http://www.w3.org/2000/svg" width="808" height="744" viewBox="0 0 808 744" fill="none">
                    <path d="M808 744L0 0V744H808Z" fill="url(#paint0_linear_2128_805)" fill-opacity="0.04" />
                    <defs>
                        <linearGradient id="paint0_linear_2128_805" x1="39.2233" y1="80.8696" x2="878.799" y2="224.224" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5F90F0" />
                            <stop offset="1" stop-color="#185AD9" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}
