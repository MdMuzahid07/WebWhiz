
export default function ContactUs() {
    return (
        <section className="max-w-[1440px] mx-auto bg-background">
            <div className="pl-[24px] pr-[24px] sm:pl-[32px] sm:pr-[32px] lg:pl-[150px] lg:pr-[0px]">
                <div className="flex gap-[16px] sm:gap-[24px] gap-[80px]">
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

                        </form>


                    </div>

                    <div className="w-full lg:max-w-[756px]">

                    </div>
                </div>



            </div>
        </section>
    )
}
