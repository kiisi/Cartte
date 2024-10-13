import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode}) {

    return (
        <div className="w-full grid lg:grid-cols-[0.80fr_1fr]">
            <div className="hidden lg:flex relative bg-primary pt-[118px] pb-[130px] px-[90px] justify-end">
                <img src="/images/register/shape.png" alt="Clip circle" className="bottom-0 right-0 absolute pointer-events-none" />
                <img src="/images/home/quarter-circle-grey-shape.png" alt="Clip circle" className="top-0 left-0 absolute pointer-events-none" />
                <div className="w-full max-w-[509px]">
                    <header className="mb-[284px]">
                        <h1 className="text-[64px] text-white leading-[71px] mb-[20px] font-semibold">Welcome to our community</h1>
                        <p className="text-[18px] font-poppins text-[#CBD5E1]">Cartte gives you the blocks & components you need to create a truly professional website.</p>
                    </header>
                    <div>
                        <div className="flex mb-[11px] gap-[4px] mb-[32px]">
                            {
                                [...Array(5)].map((_, index) => (
                                    <img key={index} src="/images/register/star.png" alt="Star" width={24} height={24} />
                                ))
                            }
                        </div>
                        <p className="font-poppins text-white text-[22px] leading-[36px] mb-[24px]">
                            "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
                        </p>
                        <div className="flex gap-[16px] items-center">
                            <img
                                src="/images/register/picture.png"
                                alt="User"
                                className="shrink-0"
                                width={48}
                                height={48}
                            />
                            <div>
                                <h2 className="text-[17px] font-poppins text-white font-semibold">Devon Lane</h2>
                                <p className="text-[#CBD5E1] text-[15px]">Co-Founder, Design.co</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[68px] pb-[87px] px-[20px] lg:px-[111px] w-full max-w-[900px]">
                { children }
            </div>
        </div>
    )
}