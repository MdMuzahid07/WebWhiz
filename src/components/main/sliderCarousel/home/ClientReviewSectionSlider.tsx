
// "use client"

// import { useState } from "react"
// import Image from "next/image"

// export default function ClientReviewSectionSlider() {
//     const reviews = [
//         {
//             id: 1,
//             name: "Maria Sarapavoo",
//             title: "Whistleblower and privacy advocate",
//             rating: 4.5,
//             text: "The team at WebWhiz consistently delivered outstanding results surpassing our expectations in",
//             image: "/placeholder.svg?height=400&width=300&text=Person1",
//             smallImages: [
//                 "/placeholder.svg?height=200&width=200&text=Small1A",
//                 "/placeholder.svg?height=200&width=200&text=Small1B",
//             ],
//         },
//         {
//             id: 2,
//             name: "John Doe",
//             title: "Marketing Director",
//             rating: 5.0,
//             text: "Working with this team has been an absolute pleasure. They delivered exceptional quality on time.",
//             image: "/placeholder.svg?height=400&width=300&text=Person2",
//             smallImages: [
//                 "/placeholder.svg?height=200&width=200&text=Small2A",
//                 "/placeholder.svg?height=200&width=200&text=Small2B",
//             ],
//         },
//         {
//             id: 3,
//             name: "Sarah Johnson",
//             title: "CEO at TechStart",
//             rating: 4.8,
//             text: "Their attention to detail and commitment to excellence made our project a huge success.",
//             image: "/placeholder.svg?height=400&width=300&text=Person3",
//             smallImages: [
//                 "/placeholder.svg?height=200&width=200&text=Small3A",
//                 "/placeholder.svg?height=200&width=200&text=Small3B",
//             ],
//         },
//         {
//             id: 4,
//             name: "Michael Chen",
//             title: "Product Manager",
//             rating: 4.7,
//             text: "Innovative solutions and responsive communication throughout the entire development process.",
//             image: "/placeholder.svg?height=400&width=300&text=Person4",
//             smallImages: [
//                 "/placeholder.svg?height=200&width=200&text=Small4A",
//                 "/placeholder.svg?height=200&width=200&text=Small4B",
//             ],
//         },
//     ]
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const totalSlides = reviews.length
//     const currentSlide = currentIndex + 1

//     return (
//         <div>
//             <div className="flex flex-col items-center xl:flex-row gap-[24px] sm:gap-[32px] relative">
//                 <div className="w-full overflow-x-hidden md:-mt-[123px] xl:-ml-[149px] ">
//                     <div className="w-full min-w-[419px] sm:w-[786px] lg:w-[802px] flex items-baseline gap-[16px] sm:gap-[24px] lg:gap-[32px]">


//                         <figure className="w-[126px] sm:w-[216px] xl:w-[216px] h-[141px] sm:h-[249px] xl:h-[212px]">
//                             <Image
//                                 src="/images/home/client-reviews/slider-img-3.png"
//                                 width={216}
//                                 height={212}
//                                 alt="client review slide image"
//                                 className="w-full h-full rounded-[8px] xl:rounded-[16px]"
//                             />
//                         </figure>

//                         <figure className="w-[126px] sm:w-[216px] xl:w-[216px] h-[141px] sm:h-[249px] xl:h-[212px]">
//                             <Image
//                                 src="/images/home/client-reviews/slider-img-2.png"
//                                 width={216}
//                                 height={212}
//                                 alt="client review slide image"
//                                 className="w-full h-full rounded-[8px] xl:rounded-[16px]"
//                             />
//                         </figure>


//                         <figure className="w-[135px] sm:w-[306px] h-[176.912px] sm:h-[401px]">
//                             <Image
//                                 src="/images/home/client-reviews/slider-img-1.png"
//                                 width={206}
//                                 height={401}
//                                 alt="client review slide image"
//                                 className="w-full h-full rounded-[8px] xl:rounded-[16px]"
//                             />
//                         </figure>

//                     </div>

//                 </div>

//                 <div className="w-full xl:max-w-[456px] -mb-[60px]">

//                     {/* // slider nav desktop  */}
//                     <div className="hidden xl:flex justify-end">
//                         <div className="flex items-center gap-[12px] mb-[16px] ">
//                             <button
//                                 className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
//                                 aria-label="Previous slide"
//                             >
//                                 <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
//                                         <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                             </button>

//                             <div className="flex items-baseline w-[36px]">
//                                 <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
//                                     01
//                                 </p>
//                                 <p className="text-sm">/4</p>
//                             </div>

//                             <button
//                                 className=" cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full "
//                                 aria-label="Next slide"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                     <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>


//                     <div className="w-full xl:w-[456px] border-[1px] border-primary-start lg:h-[170px] p-[16px] lg:p-[24px] bg-background rounded-[12px]">
//                         <div className="flex justify-between">
//                             <div className="mb-4">
//                                 <h3 className="text-[20px] font-semibold leading-[150%]">
//                                     Maria Sarapavoo
//                                 </h3>
//                                 <p className="text-[14px] leading-[160%] text-body">
//                                     Whistleblower and privacy advocate
//                                 </p>
//                             </div>

//                             <div className="flex items-center gap-[8px] mb-[13px]">
//                                 <p className="text-[16px] font-semibold leading-[150%]">
//                                     4.5
//                                 </p>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                     <path d="M4.78332 13.3334C4.87498 12.9251 4.70832 12.3417 4.41665 12.0501L2.39165 10.0251C1.75832 9.39175 1.50832 8.71675 1.69165 8.13341C1.88332 7.55008 2.47498 7.15008 3.35832 7.00008L5.95832 6.56675C6.33332 6.50008 6.79165 6.16675 6.96665 5.82508L8.39998 2.95008C8.81665 2.12508 9.38332 1.66675 9.99998 1.66675C10.6167 1.66675 11.1833 2.12508 11.6 2.95008L13.0333 5.82508C13.1417 6.04175 13.3667 6.25008 13.6083 6.39175L4.63332 15.3667C4.51665 15.4834 4.31665 15.3751 4.34998 15.2084L4.78332 13.3334Z" fill="#FBA017" />
//                                     <path d="M15.5833 12.0501C15.2833 12.3501 15.1166 12.9251 15.2166 13.3334L15.7916 15.8417C16.0333 16.8834 15.8833 17.6667 15.3666 18.0417C15.1583 18.1917 14.9083 18.2667 14.6166 18.2667C14.1916 18.2667 13.6916 18.1084 13.1416 17.7834L10.7 16.3334C10.3166 16.1084 9.68331 16.1084 9.29998 16.3334L6.85831 17.7834C5.93331 18.3251 5.14165 18.4167 4.63331 18.0417C4.44165 17.9001 4.29998 17.7084 4.20831 17.4584L14.3416 7.32508C14.725 6.94174 15.2666 6.76674 15.7916 6.85841L16.6333 7.00008C17.5166 7.15008 18.1083 7.55008 18.3 8.13341C18.4833 8.71674 18.2333 9.39174 17.6 10.0251L15.5833 12.0501Z" fill="#FBA017" />
//                                 </svg>
//                             </div>
//                         </div>

//                         <p className="text-[16px] text-body leading-[160%] line-clamp-2">
//                             The team at WebWhiz consistently delivered outstanding
//                             results surpassing our expectations in
//                         </p>
//                     </div>



//                     {/* // slider nav tablet, and mobile  */}
//                     <div className="flex xl:hidden w-full justify-end">
//                         <div className="flex items-center gap-[12px] mt-[16px] sm:mt-[24px] ">
//                             <button
//                                 className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
//                                 aria-label="Previous slide"
//                             >
//                                 <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
//                                         <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                             </button>

//                             <div className="flex items-baseline w-[36px]">
//                                 <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
//                                     01
//                                 </p>
//                                 <p className="text-sm">/4</p>
//                             </div>

//                             <button
//                                 className=" cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full "
//                                 aria-label="Next slide"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                     <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>



//                 </div>
//             </div>
//         </div>
//     )
// }



"use client"

import { useState } from "react"
import Image from "next/image"

export default function ClientReviewSectionSlider() {
    const reviews = [
        {
            id: 1,
            name: "Maria Sarapavoo",
            title: "Whistleblower and privacy advocate",
            rating: 4.5,
            text: "The team at WebWhiz consistently delivered outstanding results surpassing our expectations in",
            mainImage: "/images/home/client-reviews/slider-img-1.png",
            smallImages: [
                "/images/home/client-reviews/slider-img-2.png",
                "/images/home/client-reviews/slider-img-3.png",
            ],
        },
        {
            id: 2,
            name: "John Doe",
            title: "Marketing Director",
            rating: 5.0,
            text: "Working with this team has been an absolute pleasure. They delivered exceptional quality on time.",
            mainImage: "/images/home/client-reviews/slider-img-2.png",
            smallImages: [
                "/images/home/client-reviews/slider-img-1.png",
                "/images/home/client-reviews/slider-img-3.png",
            ],
        },
        {
            id: 3,
            name: "Sarah Johnson",
            title: "CEO at TechStart",
            rating: 4.8,
            text: "Their attention to detail and commitment to excellence made our project a huge success.",
            mainImage: "/images/home/client-reviews/slider-img-3.png",
            smallImages: [
                "/images/home/client-reviews/slider-img-1.png",
                "/images/home/client-reviews/slider-img-2.png",
            ],
        },
        {
            id: 4,
            name: "Michael Chen",
            title: "Product Manager",
            rating: 4.7,
            text: "Innovative solutions and responsive communication throughout the entire development process.",
            mainImage: "/images/home/hero-area-section/hero-right-person.png",
            smallImages: [
                "/images/home/client-reviews/slider-img-2.png",
                "/images/home/client-reviews/slider-img-3.png",
            ],
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const totalSlides = reviews.length
    const currentSlide = currentIndex + 1

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    }

    const formatSlideNumber = (num: number) => {
        return num.toString().padStart(2, '0')
    }

    return (
        <div>
            <div className="flex flex-col items-center xl:flex-row gap-[24px] sm:gap-[32px] relative">
                <div className="w-full overflow-x-hidden md:-mt-[123px] xl:-ml-[149px]">
                    <div className="w-full min-w-[419px] sm:w-[786px] lg:w-[802px] flex items-baseline gap-[16px] sm:gap-[24px] lg:gap-[32px]">
                        <figure className="w-[126px] sm:w-[216px] xl:w-[216px] h-[141px] sm:h-[249px] xl:h-[212px]">
                            <Image
                                src={reviews[currentIndex].smallImages[0]}
                                width={216}
                                height={212}
                                alt="client review slide image"
                                className="w-full h-full rounded-[8px] object-cover object-center xl:rounded-[16px]"
                            />
                        </figure>

                        <figure className="w-[126px] sm:w-[216px] xl:w-[216px] h-[141px] sm:h-[249px] xl:h-[212px]">
                            <Image
                                src={reviews[currentIndex].smallImages[1]}
                                width={216}
                                height={212}
                                alt="client review slide image"
                                className="w-full h-full rounded-[8px] object-cover object-center xl:rounded-[16px]"
                            />
                        </figure>

                        <figure className="w-[135px] sm:w-[306px] h-[176.912px] sm:h-[401px]">
                            <Image
                                src={reviews[currentIndex].mainImage}
                                width={206}
                                height={401}
                                alt="client review main image"
                                className="w-full h-full rounded-[8px] object-cover object-center xl:rounded-[16px]"
                            />
                        </figure>
                    </div>
                </div>

                <div className="w-full xl:max-w-[456px] -mb-[60px]">
                    {/* slider nav desktop */}
                    <div className="hidden xl:flex justify-end">
                        <div className="flex items-center gap-[12px] mb-[16px]">
                            <button
                                onClick={goToPrevSlide}
                                className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
                                aria-label="Previous slide"
                            >
                                <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>

                            <div className="flex items-baseline w-[36px]">
                                <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                    {formatSlideNumber(currentSlide)}
                                </p>
                                <p className="text-sm">/{totalSlides}</p>
                            </div>

                            <button
                                onClick={goToNextSlide}
                                className="cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="w-full xl:w-[456px] border-[1px] border-primary-start h-[170px] p-[16px] lg:p-[24px] bg-background rounded-[12px]">
                        <div className="flex justify-between">
                            <div className="mb-4">
                                <h3 className="text-[20px] font-semibold leading-[150%]">
                                    {reviews[currentIndex].name}
                                </h3>
                                <p className="text-[14px] leading-[160%] text-body">
                                    {reviews[currentIndex].title}
                                </p>
                            </div>

                            <div className="flex items-center gap-[8px] mb-[13px]">
                                <p className="text-[16px] font-semibold leading-[150%]">
                                    {reviews[currentIndex].rating}
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.78332 13.3334C4.87498 12.9251 4.70832 12.3417 4.41665 12.0501L2.39165 10.0251C1.75832 9.39175 1.50832 8.71675 1.69165 8.13341C1.88332 7.55008 2.47498 7.15008 3.35832 7.00008L5.95832 6.56675C6.33332 6.50008 6.79165 6.16675 6.96665 5.82508L8.39998 2.95008C8.81665 2.12508 9.38332 1.66675 9.99998 1.66675C10.6167 1.66675 11.1833 2.12508 11.6 2.95008L13.0333 5.82508C13.1417 6.04175 13.3667 6.25008 13.6083 6.39175L4.63332 15.3667C4.51665 15.4834 4.31665 15.3751 4.34998 15.2084L4.78332 13.3334Z" fill="#FBA017" />
                                    <path d="M15.5833 12.0501C15.2833 12.3501 15.1166 12.9251 15.2166 13.3334L15.7916 15.8417C16.0333 16.8834 15.8833 17.6667 15.3666 18.0417C15.1583 18.1917 14.9083 18.2667 14.6166 18.2667C14.1916 18.2667 13.6916 18.1084 13.1416 17.7834L10.7 16.3334C10.3166 16.1084 9.68331 16.1084 9.29998 16.3334L6.85831 17.7834C5.93331 18.3251 5.14165 18.4167 4.63331 18.0417C4.44165 17.9001 4.29998 17.7084 4.20831 17.4584L14.3416 7.32508C14.725 6.94174 15.2666 6.76674 15.7916 6.85841L16.6333 7.00008C17.5166 7.15008 18.1083 7.55008 18.3 8.13341C18.4833 8.71674 18.2333 9.39174 17.6 10.0251L15.5833 12.0501Z" fill="#FBA017" />
                                </svg>
                            </div>
                        </div>

                        <p className="text-[16px] text-body leading-[160%] line-clamp-2">
                            {reviews[currentIndex].text}
                        </p>
                    </div>

                    {/* slider nav tablet and mobile */}
                    <div className="flex xl:hidden w-full justify-end">
                        <div className="flex items-center gap-[12px] mt-[16px] sm:mt-[24px]">
                            <button
                                onClick={goToPrevSlide}
                                className="w-[32px] h-[32px] cursor-pointer p-[1px] bg-gradient-to-r from-primary-start to-primary-end rounded-full"
                                aria-label="Previous slide"
                            >
                                <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path d="M6.38 3.95L2.33 8l4.05 4.05" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.67 8H2.45" stroke="#185AD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>

                            <div className="flex items-baseline w-[36px]">
                                <p className="text-[18.903px] bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                                    {formatSlideNumber(currentSlide)}
                                </p>
                                <p className="text-sm">/{totalSlides}</p>
                            </div>

                            <button
                                onClick={goToNextSlide}
                                className="cursor-pointer w-[32px] h-[32px] flex justify-center items-center bg-gradient-to-r from-primary-start to-primary-end rounded-full"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.33331 8L13.5533 8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}