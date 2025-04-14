import Image from "next/image";
import React from "react";

export default function BlogSection() {
    return (
        <section className="max-w-[1440px] mx-auto bg-background px-[24px] sm:px-[32px] lg:px-[150px]  pb-[42px] lg:pb-[76px]">
            <div className="flex flex-col sm:flex-row gap-[24px] lg:gap-[70px]">


                <div className="h-[586px] flex items-end relative">

                    <figure className="w-[369px] h-[510px] absolute left-[93px]  bottom-[32px] z-10">
                        <Image
                            src="/images/home/blog-section/tab-in-hand.png"
                            width={369}
                            height={510}
                            alt="tab in hand image"
                            className="w-full h-full rounded-[6.606px] lg:rounded-[12px]"
                        />
                    </figure>

                    <div className="w-[554px] h-[450px] rounded-[16px] bg-[#EDEEFB] relative z-0"></div>
                </div>


            </div>
        </section>
    )
}
