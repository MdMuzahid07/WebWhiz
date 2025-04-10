"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const navLinks = [
    { id: 1, href: "#", label: "Home" },
    { id: 2, href: "#", label: "Portfolio" },
    { id: 3, href: "#", label: "About Us" },
    { id: 4, href: "#", label: "Services" },
    { id: 5, href: "#", label: "Testimonials" },
    { id: 6, href: "#", label: "Blog" }
];

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="w-full bg-white">
            <nav className="max-w-[1140px] my-[32px] mx-auto flex justify-between items-center px-[32px] xl:px-[0]">
                <div>
                    <figure className="cursor-pointer">
                        <Image
                            src="/images/web-whiz-logo.svg"
                            alt="Web Whiz Logo"
                            width={114}
                            height={24}
                            className="w-auto h-auto object-contain "
                            priority
                        />
                    </figure>
                </div>
                <div className="flex items-center gap-[32px]">
                    <ul className=" gap-[32px] hidden lg:flex">
                        {navLinks?.map((link) => (
                            <li key={link.id}>
                                <Link href={link.href} className="text-sm font-normal leading-[160%] text-body">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-[24px]">
                        <div className="hidden sm:flex">
                            <button className="w-[103px] h-[46px] bg-gradient-to-r from-primary-start to-primary-end text-white text-sm font-medium leading-[160%] flex items-center justify-center rounded-full">
                                Contact
                            </button>
                        </div>

                        {/* ====== mobile nav =======> */}
                        <div className="flex lg:hidden">

                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M3.85925 7H21.8593" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3.85925 12H21.8593" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3.85925 17H21.8593" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>


                            {
                                isSidebarOpen && (
                                    <div className="absolute  w-full sm:max-w-[300px] top-0 right-0 h-full  bg-gradient-to-r from-primary-start to-primary-end z-50">
                                        <div className="flex justify-end p-4">
                                            <button onClick={() => setIsSidebarOpen(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <ul className=" gap-4 mt-16 p-6 space-y-4">
                                            {navLinks?.map((link) => (
                                                <li key={link.id}>
                                                    <Link href={link.href} className="text-md w-full cursor-pointer font-normal leading-[160%] text-white">
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            }

                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}
