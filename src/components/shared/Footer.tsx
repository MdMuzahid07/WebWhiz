
export default function Footer() {
    return (
        <footer className="max-w-[1440px] mx-auto bg-footer-bg px-[24px] sm:px-[32px] lg:px-[150px]">
            <div className="pt-[32px] pb-[42px]">
                <div className="flex items-center justify-between">
                    <div className="lg:w-[381px] relative">
                        <p className="text-caption text-center sm:text-left text-[14px] font-semibold leading-[160%] tracking-[1.68px] uppercase">join us</p>
                        <h1 className="text-white text-[20px] relative font-bold sm:text-[28px] lg:text-[32px] leading-[140%]">
                            Subscribe for newsletter

                            <span className="absolute right-0 top-[11px] -mr-[44px]">
                                <div className="flex justify-center items-center w-[28px] h-[28px] rounded-full border-[3.111px] border-caption">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                        <path d="M5.71468 0.655948C5.80448 0.379554 6.1955 0.379554 6.28531 0.655947L7.32962 3.86999C7.36978 3.99359 7.48496 4.07728 7.61493 4.07728H10.9944C11.285 4.07728 11.4058 4.44917 11.1707 4.61999L8.43668 6.60637C8.33154 6.68277 8.28754 6.81818 8.3277 6.94178L9.37201 10.1558C9.46181 10.4322 9.14547 10.6621 8.91035 10.4912L6.17633 8.50485C6.07118 8.42845 5.9288 8.42845 5.82366 8.50485L3.08963 10.4912C2.85452 10.6621 2.53817 10.4322 2.62798 10.1558L3.67228 6.94178C3.71245 6.81818 3.66845 6.68277 3.5633 6.60637L0.829278 4.61999C0.594164 4.44917 0.714996 4.07728 1.00561 4.07728H4.38505C4.51502 4.07728 4.63021 3.99359 4.67037 3.86999L5.71468 0.655948Z" fill="#D9D9D9" />
                                    </svg>
                                </div>
                            </span>
                        </h1>
                    </div>
                    <div className="w-[370px] h-[46px] relative">
                        <input className="text-body h-full w-full rounded-full border-[1px] border-[rgba(255,255,255,0.20)] px-[16px] py-[10px]" type="text" placeholder="Enter your Email" />
                        <button
                            type="submit"
                            className="px-[16px] bg-[linear-gradient(99deg,_#5F90F0_5.67%,_#185AD9_98.08%)] py-[10px] w-[111px] h-full rounded-[80px] text-white text-[14px] font-medium leading-[160%] flex justify-center items-center absolute right-0 top-0"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>


                <div className="flex gap-[32px] lg:gap-[133px]">
                    <div className="lg:w-[339px]">
                        <div></div>
                        <div></div>
                    </div>



                    <ul className="flex justify-">

                    </ul>
                </div>
            </div>

            {/* footer bottom */}
            <div className="border-t-[1px] border-[#262626]">
                <div className="flex justify-center items-center gap-[4px] py-[16px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5Z" stroke="#64656D" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.16 11.25C10.6275 11.715 9.93749 12 9.17999 12C7.52249 12 6.17999 10.6575 6.17999 9C6.17999 7.3425 7.52249 6 9.17999 6C9.93749 6 10.6275 6.285 11.16 6.75" stroke="#64656D" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p className=" text-[14px] leading-[160%] text-body">
                        Copyright 2023 Elearner,Inc NewYork
                    </p>
                </div>
            </div>
        </footer>
    )
}
