import React from 'react'
import ClientReviewSectionSlider from '../sliderCarousel/home/ClientReviewSectionSlider'

export default function ClientReviews() {
    return (
        <section className="max-w-[1440px] mx-auto py-[42px]  lg:py-[76px] px-[24px] sm:px-[32px] lg:px-[150px] h-full bg-background">

            <h1 className="mb-[8px] lg:mb-[16px]  text-[24px] sm:text-[28px] lg:text-[40px] font-bold leading-[140%] ">
                Client Reviews
            </h1>
            <div className="w-full max-w-[330px] ">
                <div className="sm:flex sm:items-center sm:gap-[12px]">
                    <div className="h-[52px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                    </div>

                    <p className="w-full text-body text-[16px] leading-[160%]">
                        The team at  consistently delivered outstanding surpassing expectations
                    </p>
                </div>
            </div>


            <ClientReviewSectionSlider />

        </section>
    );
}
