
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


                <div className="flex gap-[32px] lg:gap-[133px] lg:mt-[62px]">
                    <div className="lg:w-[339px] flex flex-col gap-[16px]">
                        <div>
                            <div className="flex items-center gap-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M11.3964 9.40406H23.2836L21.5854 6.129L10.1492 6.129C8.43629 6.129 6.99148 7.3589 6.77903 8.99784L6.30182 12.6791H9.69818V11.0416C9.69818 10.1372 10.4585 9.40406 11.3964 9.40406Z" fill="white" />
                                    <path d="M12.2454 15.9542H0.358209L2.05639 19.2292H13.4926C15.2055 19.2292 16.6503 17.9993 16.8628 16.3604L17.34 12.6791H13.9436V14.3166C13.9436 15.221 13.1833 15.9542 12.2454 15.9542Z" fill="white" />
                                    <path d="M0 12.6791L3.75456 12.6791L4.1143 9.21015C4.3921 6.53141 6.72969 4.49148 9.5215 4.49148H23.2836L21.5854 0.5H8.59702C4.14237 0.5 0.675589 4.45417 0.358209 8.73881L0 12.6791Z" fill="white" />
                                    <path d="M24 12.6791H19.8872L19.5275 16.1481C19.2497 18.8268 16.9121 20.8667 14.1203 20.8667L0.358209 20.8667L2.05639 24.5H8.23881H14.6866C19.1412 24.5 23.3244 20.904 23.6418 16.6194L24 12.6791Z" fill="white" />
                                </svg>
                                <h1 className="text-white text-[18px] font-extrabold leading-[150%]">
                                    WebWhiz
                                </h1>
                            </div>

                            <p className="text-[16px] text-body leading-[160%] mt-[8px]">
                                Customer Feedback Analytic like it was Supposed to be!
                            </p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-[8px]">
                                <p className="text-[16px] leading-[160%] text-white">Social Links</p>
                                <div className="h-[2px] w-[27px] bg-primary-end">
                                </div>
                            </div>

                            <ul className="mt-[16px] flex items-center gap-[8px]">
                                <li className="w-[24] h-[24px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1" />
                                        <path d="M7.92213 13.239C7.55249 12.8693 7.18285 12.4997 6.88714 12.13C6.5175 11.6125 5.77822 11.0951 6.81321 10.4297C7.10892 10.2079 6.88714 9.76433 6.81321 9.46862C6.59143 8.80327 6.5175 8.13793 6.5175 7.10294C7.47856 8.50757 8.43963 9.32078 9.84426 9.69042C10.2878 9.83827 10.7314 9.83826 11.2489 9.91219C12.136 9.98612 12.5057 9.54254 12.5796 8.65541C12.8014 6.36364 14.0582 5.62436 16.0542 6.80721C16.7935 7.25077 17.0892 6.58543 17.6806 6.5115C17.9024 7.10292 18.2721 7.69435 17.6806 8.3597C17.3849 8.65541 17.4588 9.09898 17.4588 9.54255C17.3849 13.0172 15.241 15.9004 11.9142 16.9354C10.8793 17.305 9.77033 17.5268 8.58748 17.5268C7.62642 17.4528 6.73928 17.305 6 16.3439C6.96106 16.1961 8.06999 16.7136 8.73534 15.6047C8.29177 14.9393 7.10892 14.7175 7.03499 13.6086C7.18285 13.239 7.70035 13.6086 7.92213 13.239Z" fill="white" />
                                    </svg>
                                </li>

                                <li className="w-[24] h-[24px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1" />
                                        <path d="M10.3611 13.6245C10.3611 12.7109 10.3611 11.8625 10.3611 10.9489C10.4264 9.77424 11.079 9.18691 12.1231 9.64373C12.6452 9.8395 12.9715 9.90477 13.363 9.70899C14.3419 9.18691 15.1903 9.57846 16.1039 9.90476C16.6913 10.1005 17.0176 10.5573 17.2133 11.1447C17.7354 12.8414 17.7354 14.5382 17.6702 16.2349C17.6702 16.6917 17.4744 17.018 16.9523 17.0833C16.8218 17.0833 16.7565 17.0833 16.626 17.1485C14.7988 17.4748 14.603 17.3443 14.7987 15.5171C14.864 14.7339 14.9945 13.9508 14.7987 13.1677C14.6682 12.7762 14.5377 12.3194 14.0156 12.2541C13.5588 12.1888 13.2325 12.5151 12.9715 12.8414C12.7105 13.1677 12.6452 13.5593 12.6452 14.0161C12.6452 14.6687 12.6452 15.256 12.6452 15.9086C12.6452 17.2138 12.5799 17.2791 11.4053 17.2138C10.2959 17.2138 10.2959 17.2138 10.2959 16.1044C10.3611 15.3213 10.3611 14.4729 10.3611 13.6245Z" fill="white" />
                                        <path d="M6.77213 13.4939C6.77213 12.5802 6.77213 11.7319 6.77213 10.8182C6.77213 10.0351 7.22895 9.90461 7.88154 9.83936C8.59939 9.83936 8.72991 10.2309 8.72991 10.8182C8.86042 12.515 8.86043 14.2117 8.79517 15.9085C8.79517 16.4958 8.79517 17.2137 7.88154 17.2137C7.09843 17.2789 6.70686 16.9526 6.70686 16.1695C6.70686 15.2559 6.70686 14.277 6.70686 13.3634C6.70686 13.4939 6.77213 13.4939 6.77213 13.4939Z" fill="white" />
                                        <path d="M7.35956 6.25C8.33845 6.25 8.86054 6.64156 8.86054 7.22889C8.86054 7.94674 8.01216 8.79511 7.35956 8.79511C6.70697 8.79511 6.25017 8.27304 6.25017 7.55519C6.31543 6.70682 6.70697 6.25 7.35956 6.25Z" fill="white" />
                                    </svg>
                                </li>

                                <li className="w-[24] h-[24px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1" />
                                    <path d="M4.75017 12.7432C6.13376 11.8627 7.14001 11.2338 8.20916 10.6049C10.7248 9.22131 13.1775 7.83772 15.6303 6.32835C16.5736 5.76233 16.8252 5.8881 16.8252 7.02013C16.7623 7.83771 16.6365 8.59241 16.5107 9.40999C16.1334 11.7369 15.6932 14.0639 15.3158 16.3909C15.19 17.0827 14.9385 17.2713 14.3096 16.894C13.9951 16.7053 13.6806 16.6424 13.3662 16.5166C11.731 15.8248 11.5424 15.8248 10.3474 17.1455C10.0959 17.3971 10.033 17.7744 9.52986 17.8373C9.34119 16.6424 9.08963 15.5733 9.9701 14.5041C10.8506 13.3721 11.6681 12.303 12.6115 11.1709C12.8631 10.8565 13.0517 10.542 13.1775 10.1647C11.731 11.108 10.2846 12.1143 9.08963 13.3721C8.6494 13.8752 8.27205 13.9381 7.64314 13.6865C6.82556 13.3721 5.94509 13.1205 4.75017 12.7432Z" fill="white" />
                                </svg></li>
                                <li className="w-[24] h-[24px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1" />
                                    <path d="M6.3836 11.8599C6.3836 10.9385 6.44942 9.95134 6.3836 9.02995C6.31779 8.43762 6.58104 8.17437 7.17337 8.10856C8.16057 7.97693 9.14778 7.97693 10.135 8.04274C11.7145 8.24018 12.4385 9.55646 11.8461 11.0044C11.6487 11.3992 11.5829 11.5967 11.912 11.9916C13.0308 13.3078 12.4385 15.1506 10.7931 15.6113C9.54266 15.9404 8.16058 15.6771 6.91012 15.743C6.44942 15.743 6.3836 15.3481 6.3836 14.9532C6.31779 13.966 6.31779 12.913 6.3836 11.8599ZM9.14778 12.913C9.01615 12.913 8.81872 12.913 8.62128 12.913C8.16058 12.913 7.83151 13.0446 7.89732 13.6369C7.96314 14.0976 8.09477 14.4267 8.62128 14.4267C9.08197 14.4267 9.54266 14.4267 10.0034 14.3609C10.4641 14.2951 10.8589 14.1634 10.7273 13.5711C10.6615 13.1104 10.3324 12.8471 9.87173 12.8471C9.67429 12.8471 9.47685 12.8471 9.14778 12.913ZM9.08197 11.0702C9.34523 11.0044 9.60848 11.0044 9.87173 10.9385C10.2008 10.8727 10.3982 10.6095 10.3982 10.2804C10.3982 9.88552 10.0692 9.7539 9.74011 9.7539C9.27941 9.7539 8.81871 9.75391 8.35802 9.81972C8.02895 9.81972 7.89732 10.0172 7.89732 10.3462C7.89732 10.6095 7.89732 10.8727 8.22639 11.0044C8.48965 11.0044 8.81872 11.0044 9.08197 11.0702Z" fill="white" />
                                    <path d="M17.9655 14.1633C17.3732 15.677 16.3202 16.3351 15.0039 16.1377C13.8193 15.9402 13.0295 14.8872 13.0295 13.5051C13.0295 12.1889 13.0953 10.9384 14.4774 10.2803C16.0569 9.4905 18.0972 10.5435 18.2946 12.3205C18.3604 12.9786 17.9655 13.5051 17.2416 13.5709C16.5176 13.6368 15.7937 13.6368 15.0697 13.6368C14.8723 13.6368 14.6748 13.7684 14.6748 14.0317C14.6748 14.1633 14.8065 14.3607 14.8723 14.4265C15.3988 14.8214 15.9911 14.953 16.4518 14.4923C16.9125 13.9658 17.3732 13.9658 17.9655 14.1633ZM15.7279 12.5179C16.0569 12.5179 16.386 12.5838 16.4518 12.1231C16.4518 11.7282 16.1886 11.4649 15.7937 11.4649C15.3988 11.4649 15.0697 11.6624 15.0039 12.0572C14.8723 12.5838 15.4646 12.3863 15.7279 12.5179Z" fill="white" />
                                    <path d="M15.5306 9.55671C15.2016 9.55671 14.9383 9.55671 14.6092 9.55671C14.2802 9.55671 14.0169 9.42509 14.0169 8.96439C14.0169 8.56951 14.2144 8.37207 14.6092 8.37207C15.2674 8.37207 15.9255 8.37207 16.6495 8.37207C16.9785 8.37207 17.1102 8.56952 17.1102 8.83277C17.1102 9.16184 17.0444 9.4251 16.5837 9.49091C16.2546 9.55673 15.9255 9.4909 15.5306 9.55671C15.5306 9.4909 15.5306 9.4909 15.5306 9.55671Z" fill="white" />
                                </svg></li>
                                <li className="w-[24] h-[24px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1" />
                                    <path d="M11.8974 6.26002C15.6382 6.13322 18.0474 9.55694 17.9206 12.1564C17.7304 15.9606 15.7015 17.6091 11.7706 17.8627C8.98088 18.0529 5.93757 15.0096 6.00097 12.2199C6.12778 8.60591 9.48811 6.06982 11.8974 6.26002ZM11.3268 11.459C11.0098 11.5224 10.6294 11.6492 10.3123 11.7126C9.55151 11.9662 8.79068 12.1565 7.96645 12.2199C7.07881 12.2199 6.95201 12.4735 7.14222 13.3611C7.26903 13.9317 7.58603 14.3755 7.96645 14.8194C8.15665 15.073 8.34686 15.1364 8.60047 14.9462C9.61491 14.1219 10.6293 13.2977 11.7706 12.7271C12.0242 12.6003 12.0242 12.3466 11.9608 12.093C11.834 11.776 11.7072 11.459 11.3268 11.459ZM12.7216 13.8049C11.3902 14.3755 10.2489 14.9462 9.4247 16.0874C10.5025 16.9116 11.6438 16.975 12.785 16.9116C13.2923 16.9116 13.5459 16.658 13.3557 16.1508C13.2289 15.39 13.0386 14.6925 12.7216 13.8049ZM8.34686 10.8884C8.47367 10.8884 8.72728 10.825 8.98089 10.825C9.67832 10.6982 10.6293 10.7616 10.8196 10.191C11.0732 9.49354 10.3123 8.85951 9.86852 8.22548C9.55151 7.71827 9.17109 7.84507 8.79068 8.22548C8.28346 8.7327 7.83964 9.30333 7.52263 9.87395C7.07881 10.6982 7.26902 10.9518 8.34686 10.8884ZM16.082 9.04973C15.2577 9.55695 14.4335 10.0008 13.6093 10.508C13.5459 10.5714 13.4191 10.6348 13.3557 10.6982C12.9118 10.8884 12.9118 11.142 13.0386 11.5858C13.1654 11.9662 13.4191 12.1564 13.7995 12.093C14.3701 11.9662 14.8773 11.8394 15.4479 11.776C17.2866 11.5224 17.4134 11.2054 16.4624 9.62035C16.3356 9.36674 16.2088 9.23994 16.082 9.04973ZM15.0041 8.09869C13.7361 7.14765 12.4046 7.33786 11.1366 7.14765C11.834 10.0008 12.3412 10.191 14.4969 8.6059C14.6237 8.4791 14.7505 8.2889 15.0041 8.09869ZM16.716 13.1709C13.7361 12.9807 13.3557 12.7905 14.4335 15.8972C14.4335 15.9606 14.4969 15.9606 14.6237 16.024C15.8284 15.4534 16.399 14.4389 16.716 13.1709Z" fill="white" />
                                </svg></li>
                            </ul>

                        </div>
                    </div>

                    <ul className="flex ">

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
