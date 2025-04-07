import Image from "next/image";

export default function HeroAreaSection() {
    return (
        <section className=" bg-white">
            <div className="max-w-[1140px] mx-auto px-[32px] xl:px-[0] mt-[53px] mb-[76px]">
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
                            <div className="absolute right-12 -top-[24px]">
                                <Image
                                    src="/images/home/hero-area-section/person-bg-yellow-like.png"
                                    alt="Hero Section Image"
                                    width={308}
                                    height={481}
                                    className="min-w-[308px] h-[481px] object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute right-[25px]">
                                <Image
                                    src="/images/home/hero-area-section/hero-right-person.png"
                                    alt="Hero Section Image"
                                    width={358}
                                    height={433}
                                    className="min-w-[358px] h-[433px] object-cover"
                                    priority
                                />
                            </div>




                            <div className="absolute bottom-10 right-0">
                                <div className="w-[181px] h-[67px] p-[16px] rounded-[12px] flex items-center gap-[8px] shadow bg-white">
                                    <div>
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
