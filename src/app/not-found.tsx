import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src="/images/not-found.png"
                alt="404 Not Found"
                width={300}
                height={300}
                className="mb-6"
            />
            <h1 className="text-center text-2xl font-bold text-[#185AD9]">Page Not Found</h1>
            <Link href="/" className="text-[#185AD9] mt-5 underline-none w-[200px] h-[50px] border border-[#185AD9] rounded-lg flex justify-center items-center">Return Home</Link>
        </div>
    )
};
