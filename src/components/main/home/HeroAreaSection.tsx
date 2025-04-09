import Image from "next/image";

export default function HeroAreaSection() {
    return (
        <section className=" bg-white">
            <div className="max-w-[1140px] mx-auto px-[32px] xl:px-[0] mb-[76px]   mt-[100px]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-[20px] w-full h-[526px]">


                    <div>
                        <div className="max-w-[520px]">
                            <h1 className="text-[32px] font-bold leading-[140%] sm:text-[40px] md:text-[64px] md:leading-[120%]">
                                <span>
                                    Turning
                                </span>
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                        Imagination
                                    </span>
                                    <Image
                                        src="/images/home/hero-area-section/Imagination-bg-Rectangle.png"
                                        alt=""
                                        width={363}
                                        height={20}
                                        className="absolute bottom-[14px] left-1 object-cover z-0"
                                        priority
                                    />
                                </span>
                                <span className="pl-3">into</span> Innovation
                            </h1>
                        </div>

                        <div className="mt-[16px] sm:flex sm:items-center sm:gap-[12px]">
                            <div className="h-[65px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                            </div>
                            <div className="max-w-[554px]">
                                <p className="text-body text-[16px] font-normal leading-[160%]">
                                    Welcome to my digital playground, where creativity knows no bounds. I&apos;m a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-[12px] mt-[24px]">
                            <button className="w-[160px] h-[46px] bg-gradient-to-r from-primary-start to-primary-end flex justify-center items-center text-sm font-medium leading-[160%] text-white rounded-full cursor-pointer">
                                Hire Me
                            </button>
                            <button className="w-[140px] h-[46px] flex justify-center items-center text-sm font-medium leading-[160%] border border-solid border-primary-start rounded-full bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent cursor-pointer">
                                View Portfolio
                            </button>
                        </div>

                    </div>


                    <div className="flex justify-center pl-3 relative">
                        <div className="relative w-full h-full">
                            <div className="relative">
                                <div className="absolute right-[115px] -top-[24px]">
                                    <div className="relative">
                                        <div className="absolute -right-[37px] -top-[23px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <circle cx="32" cy="32" r="32" fill="#9965CF" fill-opacity="0.1" />
                                            </svg>
                                        </div>
                                        <Image
                                            src="/images/home/hero-area-section/person-bg-yellow-like.png"
                                            alt="Hero Section Image"
                                            width={308}
                                            height={481}
                                            className="min-w-[309px] h-[481px] object-cover"
                                            priority
                                        />
                                        <div className="absolute -bottom-[8px] -left-[7.5px] z-10">
                                            <Image
                                                src="/images/home/hero-area-section/purple-circle.svg"
                                                alt="purple circle"
                                                width={100}
                                                height={100}
                                                className="w-[25px] h-[25px] object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute right-[95px]">


                                    {/* // left absolute image ========> */}
                                    <div className="absolute top-[31.5px] -left-[97px]">
                                        <div className="w-[201px] h-[79px] p-[16px] rounded-[12px] flex items-center gap-[8px] shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)] bg-white">
                                            <div className="min-w-[47px] h-[47px] rounded-full">
                                                <Image
                                                    src="/images/home/hero-area-section/person-circle.png"
                                                    alt="Hero Section Image"
                                                    width={100}
                                                    height={100}
                                                    className="w-[47px] h-[47px] object-cover"
                                                    priority
                                                />
                                            </div>
                                            <div className="w-full">
                                                <p className="text-[16px] text-primary font-bold leading-[150%]">Albert Flores</p>
                                                <h2 className="text-body text-sm font-medium leading-[160%]">Product Manager</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //left absolute image <============ */}


                                    {/* // main image  */}
                                    <Image
                                        src="/images/home/hero-area-section/hero-right-person.png"
                                        alt="Hero Section Image"
                                        width={358}
                                        height={433}
                                        className="min-w-[358px] h-[433px] object-cover"
                                        priority
                                    />


                                    {/* // right absolute image ===============> */}
                                    <div className="absolute top-[149.5px] -right-[95px]">
                                        <div className="w-[170px] h-[73px] p-[16px] rounded-[12px] flex items-center gap-[8px] shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)] bg-white">
                                            <div className="w-[32px] h-[32px] rounded-full bg-secondary/10 flex justify-center items-center p-[8px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00002 8.5C9.84097 8.5 11.3334 7.00762 11.3334 5.16667C11.3334 3.32572 9.84097 1.83334 8.00002 1.83334C6.15907 1.83334 4.66669 3.32572 4.66669 5.16667C4.66669 7.00762 6.15907 8.5 8.00002 8.5Z" fill="#185AD9" />
                                                    <path d="M8 10.1667C4.66 10.1667 1.94 12.4067 1.94 15.1667C1.94 15.3533 2.08667 15.5 2.27334 15.5H13.7267C13.9133 15.5 14.06 15.3533 14.06 15.1667C14.06 12.4067 11.34 10.1667 8 10.1667Z" fill="#185AD9" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-[8px]">
                                                <div className="w-full">
                                                    <p className="text-[16px] text-primary font-semibold leading-[150%]">15,235</p>
                                                    <h2 className="text-body text-[12px] font-normal leading-[160%]">Visitors</h2>
                                                </div>
                                                <div className="flex items-center gap-[4px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                        <path d="M9.5 3L2.5 10" stroke="#185AD9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M9.5 8.135V3H4.365" stroke="#185AD9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <p className="text-[12px] font-medium leading-[160%] text-secondary">25%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // left absolute image <===================== */}


                                </div>




                            </div>


                            <div className="absolute bottom-[47px] right-[22px]">
                                <div className="w-[173px] h-[79px] p-[16px] rounded-[12px] flex items-center gap-[8px] shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)] bg-white">
                                    <div className="w-[47px] h-[47px] rounded-full p-[4px] bg-[#9965CF1A]">
                                        <Image
                                            src="/images/home/hero-area-section/victory-logo.png"
                                            alt="Hero Section Image"
                                            width={100}
                                            height={100}
                                            className="w-[39px] h-[39px] object-cover"
                                            priority
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-body text-sm font-medium leading-[160%]">Project Done</h2>
                                        <p className="text-[16px] text-primary font-medium leading-[150%]">4679</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
