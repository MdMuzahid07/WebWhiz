import Image from "next/image";

export default function ContactUs() {
    return (
        <section className="max-w-[1440px] mx-auto bg-background pb-[42px] lg:pb-[76px]">
            <div className="pl-[24px] pr-[24px] sm:pl-[32px] sm:pr-[32px] lg:pl-[150px] lg:pr-[0px]">
                <div className="flex gap-[16px] sm:gap-[24px] lg:gap-[80px]">
                    <div className="w-full lg:max-w-[456px]">
                        <h1 className="mb-[8px] lg:mb-[16px]  text-[24px] sm:text-[28px] lg:text-[40px] font-bold leading-[140%] ">
                            Contact Us
                        </h1>
                        <div className="w-full max-w-[327px] sm:max-w-[339px] lg:max-w-[456px] ">
                            <div className="sm:flex sm:items-center sm:gap-[12px]">
                                <div className="h-[52px] hidden sm:flex min-w-[4px] bg-gradient-to-r from-primary-start to-primary-end rounded-[16px]">
                                </div>

                                <p className="w-full text-body text-[16px] font-normal leading-[160%]">
                                    Feel free to reach out to us at any time. We value your feedback, inquiries, and collaboration.
                                </p>
                            </div>
                        </div>

                        <form className="mt-[40px]">

                            <input className="w-full lg:max-w-[456px] h-[58px] px-[24px] py-[16px] border-b-[1px] border-[#EBEBEB] mb-[24px]" type="text" name="" placeholder="Name" id="" />
                            <input className="w-full lg:max-w-[456px] h-[58px] px-[24px] py-[16px] border-b-[1px] border-[#EBEBEB] mb-[24px]" type="email" name="" placeholder="Email" id="" />
                            <input className="w-full lg:max-w-[456px] h-[58px] px-[24px] py-[16px] border-b-[1px] border-[#EBEBEB] mb-[24px]" type="message" name="" placeholder="Message" id="" />

                            <button
                                type="submit"
                                className="px-[24px] bg-[linear-gradient(99deg,_#5F90F0_5.67%,_#185AD9_98.08%)] py-[12px] w-full max-w-[456px] h-[56px] rounded-[80px] text-white text-[14px] font-medium leading-[160%] flex justify-center items-center"
                            >
                                Submit
                            </button>
                        </form>


                    </div>

                    <div className="w-full lg:max-w-[756px]">
                        <div className="relative flex justify-end">


                            <div className="relative">

                                <div className="w-[55px] lg:w-[117px] h-[55px] lg:h-[117px] rounded-[8px] bg-[rgba(24,90,217,0.10)] absolute z-0 top-0 left-0 sm:-ml-[15px] lg:-ml-[40px] sm:-mt-[24px] lg:-mt-[40px]"></div>

                                <figure className="lg:w-[590px] h-[475px] rounded-l-[16px] overflow-hidden relative">

                                    <Image
                                        src="/images/home/contact-us-section/customer-support-image.png"
                                        width={590}
                                        height={475}
                                        alt="customer support women wearing headphone and ready for support image"
                                        className="w-full h-full rounded-l-[16px] relative z-10"
                                    />

                                    <Image
                                        src="/images/home/contact-us-section/blue-transparent-overlay.png"
                                        width={590}
                                        height={475}
                                        alt="customer support women wearing headphone and ready for support image"
                                        className="w-full h-full rounded-l-[16px] absolute inset-0 z-20"
                                    />
                                </figure>





                            </div>
                            <div className="w-full max-w-[471px] shadow-[-30px_30px_80px_0px_rgba(19,55,124,0.04)] max-h-[288px] rounded-[16px] bg-white p-[24px] lg:p-[32px] absolute z-30 top-[74px] left-0">
                                <ul>
                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M22.6667 27.3334H9.33332C5.33332 27.3334 2.66666 25.3334 2.66666 20.6667V11.3334C2.66666 6.66675 5.33332 4.66675 9.33332 4.66675H22.6667C26.6667 4.66675 29.3333 6.66675 29.3333 11.3334V20.6667C29.3333 25.3334 26.6667 27.3334 22.6667 27.3334Z" stroke="#64656D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22.6667 12L18.4933 15.3333C17.12 16.4267 14.8667 16.4267 13.4933 15.3333L9.33334 12" stroke="#64656D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>

                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M29.2933 24.4401C29.2933 24.9201 29.1867 25.4134 28.96 25.8934C28.7333 26.3734 28.44 26.8267 28.0533 27.2534C27.4 27.9734 26.68 28.4934 25.8667 28.8267C25.0667 29.1601 24.2 29.3334 23.2667 29.3334C21.9067 29.3334 20.4533 29.0134 18.92 28.3601C17.3867 27.7067 15.8533 26.8267 14.3333 25.7201C12.8 24.6001 11.3467 23.3601 9.95999 21.9867C8.58666 20.6001 7.34666 19.1467 6.23999 17.6267C5.14666 16.1067 4.26666 14.5867 3.62666 13.0801C2.98666 11.5601 2.66666 10.1067 2.66666 8.72008C2.66666 7.81341 2.82666 6.94675 3.14666 6.14675C3.46666 5.33341 3.97332 4.58675 4.67999 3.92008C5.53332 3.08008 6.46666 2.66675 7.45332 2.66675C7.82666 2.66675 8.19999 2.74675 8.53332 2.90675C8.87999 3.06675 9.18666 3.30675 9.42666 3.65341L12.52 8.01342C12.76 8.34675 12.9333 8.65341 13.0533 8.94675C13.1733 9.22675 13.24 9.50675 13.24 9.76008C13.24 10.0801 13.1467 10.4001 12.96 10.7067C12.7867 11.0134 12.5333 11.3334 12.2133 11.6534L11.2 12.7067C11.0533 12.8534 10.9867 13.0267 10.9867 13.2401C10.9867 13.3467 11 13.4401 11.0267 13.5467C11.0667 13.6534 11.1067 13.7334 11.1333 13.8134C11.3733 14.2534 11.7867 14.8267 12.3733 15.5201C12.9733 16.2134 13.6133 16.9201 14.3067 17.6267C15.0267 18.3334 15.72 18.9867 16.4267 19.5867C17.12 20.1734 17.6933 20.5734 18.1467 20.8134C18.2133 20.8401 18.2933 20.8801 18.3867 20.9201C18.4933 20.9601 18.6 20.9734 18.72 20.9734C18.9467 20.9734 19.12 20.8934 19.2667 20.7467L20.28 19.7467C20.6133 19.4134 20.9333 19.1601 21.24 19.0001C21.5467 18.8134 21.8533 18.7201 22.1867 18.7201C22.44 18.7201 22.7067 18.7734 23 18.8934C23.2933 19.0134 23.6 19.1867 23.9333 19.4134L28.3467 22.5467C28.6933 22.7867 28.9333 23.0667 29.08 23.4001C29.2133 23.7334 29.2933 24.0667 29.2933 24.4401Z" stroke="#64656D" stroke-width="2" stroke-miterlimit="10" />
                                        </svg>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>

                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M16.6666 29.3334H5.43995C3.89328 29.3334 2.62662 28.0934 2.62662 26.5734V6.78673C2.62662 3.29339 5.22662 1.70673 8.41328 3.26673L14.3333 6.17339C15.6133 6.80006 16.6666 8.46672 16.6666 9.88006V29.3334Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.2933 20.0802V25.1202C29.2933 28.0002 27.96 29.3336 25.08 29.3336H16.6666V13.8936L17.2933 14.0269L23.2933 15.3736L26 15.9736C27.76 16.3602 29.2 17.2669 29.28 19.8269C29.2933 19.9069 29.2933 19.9869 29.2933 20.0802Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.33328 12.0002H11.9599" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.33328 17.3335H11.9599" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.2933 15.3735V19.6669C23.2933 21.3202 21.9466 22.6669 20.2933 22.6669C18.64 22.6669 17.2933 21.3202 17.2933 19.6669V14.0269L23.2933 15.3735Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.28 19.8269C29.2 21.4002 27.8933 22.6669 26.2933 22.6669C24.64 22.6669 23.2933 21.3202 23.2933 19.6669V15.3735L26 15.9735C27.76 16.3602 29.2 17.2669 29.28 19.8269Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>

                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M29.3333 16.0001C29.3333 23.3601 23.36 29.3334 16 29.3334C8.63999 29.3334 2.66666 23.3601 2.66666 16.0001C2.66666 8.64008 8.63999 2.66675 16 2.66675C23.36 2.66675 29.3333 8.64008 29.3333 16.0001Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20.9467 20.2401L16.8133 17.7734C16.0933 17.3468 15.5067 16.3201 15.5067 15.4801V10.0134" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
