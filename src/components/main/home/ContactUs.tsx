import Image from "next/image";

export default function ContactUs() {
    return (
        <section className="max-w-[1440px] mx-auto bg-background pb-[42px] lg:pb-[76px]">
            <div className="pl-[24px] pr-[24px] sm:pl-[32px] sm:pr-[32px] lg:pl-[150px] lg:pr-[0px]">
                <div className="flex gap-[16px] sm:gap-[24px] lg:gap-[80px]">
                    <div className="w-full lg:max-w-[456px] lg:mt-[25px]">
                        <h1 className="mb-[8px] lg:mb-[12px]  text-[24px] sm:text-[28px] lg:text-[40px] font-bold leading-[140%] ">
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

                    <div className="w-full lg:max-w-[756px]  lg:mt-[39px]">
                        <div className="relative flex justify-end">


                            <div className="relative">

                                <div className="w-[55px] lg:w-[117px] h-[55px] lg:h-[117px] rounded-[8px] bg-[rgba(24,90,217,0.10)] absolute z-0 top-0 left-0 sm:-ml-[15px] lg:-ml-[40px] sm:-mt-[24px] lg:-mt-[40px]"></div>

                                <figure className="w-[327px] lg:w-[590px] h-[263px] lg:h-[475px] rounded-l-[16px] overflow-hidden relative">

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
                                        <span className="hidden lg:flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M22.6667 27.3334H9.33332C5.33332 27.3334 2.66666 25.3334 2.66666 20.6667V11.3334C2.66666 6.66675 5.33332 4.66675 9.33332 4.66675H22.6667C26.6667 4.66675 29.3333 6.66675 29.3333 11.3334V20.6667C29.3333 25.3334 26.6667 27.3334 22.6667 27.3334Z" stroke="#64656D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22.6667 12L18.4933 15.3333C17.12 16.4267 14.8667 16.4267 13.4933 15.3333L9.33334 12" stroke="#64656D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>

                                        <span className="flex lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#64656D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#64656D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>

                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <span className="hidden lg:flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M29.2933 24.4401C29.2933 24.9201 29.1867 25.4134 28.96 25.8934C28.7333 26.3734 28.44 26.8267 28.0533 27.2534C27.4 27.9734 26.68 28.4934 25.8667 28.8267C25.0667 29.1601 24.2 29.3334 23.2667 29.3334C21.9067 29.3334 20.4533 29.0134 18.92 28.3601C17.3867 27.7067 15.8533 26.8267 14.3333 25.7201C12.8 24.6001 11.3467 23.3601 9.95999 21.9867C8.58666 20.6001 7.34666 19.1467 6.23999 17.6267C5.14666 16.1067 4.26666 14.5867 3.62666 13.0801C2.98666 11.5601 2.66666 10.1067 2.66666 8.72008C2.66666 7.81341 2.82666 6.94675 3.14666 6.14675C3.46666 5.33341 3.97332 4.58675 4.67999 3.92008C5.53332 3.08008 6.46666 2.66675 7.45332 2.66675C7.82666 2.66675 8.19999 2.74675 8.53332 2.90675C8.87999 3.06675 9.18666 3.30675 9.42666 3.65341L12.52 8.01342C12.76 8.34675 12.9333 8.65341 13.0533 8.94675C13.1733 9.22675 13.24 9.50675 13.24 9.76008C13.24 10.0801 13.1467 10.4001 12.96 10.7067C12.7867 11.0134 12.5333 11.3334 12.2133 11.6534L11.2 12.7067C11.0533 12.8534 10.9867 13.0267 10.9867 13.2401C10.9867 13.3467 11 13.4401 11.0267 13.5467C11.0667 13.6534 11.1067 13.7334 11.1333 13.8134C11.3733 14.2534 11.7867 14.8267 12.3733 15.5201C12.9733 16.2134 13.6133 16.9201 14.3067 17.6267C15.0267 18.3334 15.72 18.9867 16.4267 19.5867C17.12 20.1734 17.6933 20.5734 18.1467 20.8134C18.2133 20.8401 18.2933 20.8801 18.3867 20.9201C18.4933 20.9601 18.6 20.9734 18.72 20.9734C18.9467 20.9734 19.12 20.8934 19.2667 20.7467L20.28 19.7467C20.6133 19.4134 20.9333 19.1601 21.24 19.0001C21.5467 18.8134 21.8533 18.7201 22.1867 18.7201C22.44 18.7201 22.7067 18.7734 23 18.8934C23.2933 19.0134 23.6 19.1867 23.9333 19.4134L28.3467 22.5467C28.6933 22.7867 28.9333 23.0667 29.08 23.4001C29.2133 23.7334 29.2933 24.0667 29.2933 24.4401Z" stroke="#64656D" stroke-width="2" stroke-miterlimit="10" />
                                            </svg>
                                        </span>

                                        <span className="flex lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#64656D" stroke-width="1.5" stroke-miterlimit="10" />
                                            </svg>
                                        </span>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>

                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <span className="hidden lg:flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M16.6666 29.3334H5.43995C3.89328 29.3334 2.62662 28.0934 2.62662 26.5734V6.78673C2.62662 3.29339 5.22662 1.70673 8.41328 3.26673L14.3333 6.17339C15.6133 6.80006 16.6666 8.46672 16.6666 9.88006V29.3334Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M29.2933 20.0802V25.1202C29.2933 28.0002 27.96 29.3336 25.08 29.3336H16.6666V13.8936L17.2933 14.0269L23.2933 15.3736L26 15.9736C27.76 16.3602 29.2 17.2669 29.28 19.8269C29.2933 19.9069 29.2933 19.9869 29.2933 20.0802Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7.33328 12.0002H11.9599" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7.33328 17.3335H11.9599" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M23.2933 15.3735V19.6669C23.2933 21.3202 21.9466 22.6669 20.2933 22.6669C18.64 22.6669 17.2933 21.3202 17.2933 19.6669V14.0269L23.2933 15.3735Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M29.28 19.8269C29.2 21.4002 27.8933 22.6669 26.2933 22.6669C24.64 22.6669 23.2933 21.3202 23.2933 19.6669V15.3735L26 15.9735C27.76 16.3602 29.2 17.2669 29.28 19.8269Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>

                                        <span className="flex lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.5 22.0001H4.07997C2.91997 22.0001 1.96997 21.0701 1.96997 19.9301V5.09011C1.96997 2.47011 3.91997 1.2801 6.30997 2.4501L10.75 4.63011C11.71 5.10011 12.5 6.3501 12.5 7.4101V22.0001Z" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21.97 15.0602V18.8402C21.97 21.0002 20.97 22.0002 18.81 22.0002H12.5V10.4202L12.97 10.5202L17.47 11.5302L19.5 11.9802C20.82 12.2702 21.9 12.9502 21.96 14.8702C21.97 14.9302 21.97 14.9902 21.97 15.0602Z" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5.5 9.00024H8.97" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5.5 13H8.97" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M17.47 11.53V14.75C17.47 15.99 16.46 17 15.22 17C13.98 17 12.97 15.99 12.97 14.75V10.52L17.47 11.53Z" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21.96 14.8703C21.9 16.0503 20.92 17.0003 19.72 17.0003C18.48 17.0003 17.47 15.9903 17.47 14.7503V11.5303L19.5 11.9803C20.82 12.2703 21.9 12.9503 21.96 14.8703Z" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>

                                        <p className="text-[14px] lg:text-[16px] leading-[160%] text-body">
                                            michael.mitc@example.com
                                        </p>
                                    </li>

                                    <li className="flex items-center gap-[8px] mb-[24px] lg:mb-[32px]">
                                        <span className="hidden lg:flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M29.3333 16.0001C29.3333 23.3601 23.36 29.3334 16 29.3334C8.63999 29.3334 2.66666 23.3601 2.66666 16.0001C2.66666 8.64008 8.63999 2.66675 16 2.66675C23.36 2.66675 29.3333 8.64008 29.3333 16.0001Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20.9467 20.2401L16.8133 17.7734C16.0933 17.3468 15.5067 16.3201 15.5067 15.4801V10.0134" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>

                                        <span className="flex lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#64656D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>

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
