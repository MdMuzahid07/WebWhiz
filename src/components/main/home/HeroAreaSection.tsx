import Image from "next/image";

export default function HeroAreaSection() {
    return (
        <section>
            <div className="max-w-[1140px] mx-auto px-[32px] xl:px-[0] mt-[53px] ">
                <div className="grid grid-cols-2 md:grid-cols-2">
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
                                        src="/images/Imagination-bg-Rectangle.png"
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
                    <div></div>
                </div>
            </div>
        </section>
    )
}
