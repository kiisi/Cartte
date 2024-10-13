import { Link } from "react-router-dom";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import { GoogleIcon } from "../components/svgs";

export default function Register() {

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <Navbar />
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
                    <header className="mb-[48px]">
                        <h1 className="text-[#090914] font-semibold text-[42px] lg:text-[56px] mb-[12px] lg:mb-[16px]">Join Cartte</h1>
                        <p className="lg:text-[19px] lg:leading-[32px] font-poppins text-[#52525B]">Join over 188,061 creators who have earned over $1,014,349,379 on Gumroad selling digital products and memberships.</p>
                    </header>
                    <form className="flex flex-col gap-[29px]">
                        <div className="flex flex-col lg:flex-row gap-[29px] lg:gap-[20px]">
                            <fieldset className="flex-1">
                                <label htmlFor="firstName" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">First name</label>
                                <input id="firstName" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                            </fieldset>
                            <fieldset className="flex-1">
                                <label htmlFor="lastName" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Last name</label>
                                <input id="lastName" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                            </fieldset>
                        </div>
                        <fieldset className="flex-1">
                            <label htmlFor="phone" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Phone</label>
                            <input type="tel" id="phone" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                        </fieldset>
                        <fieldset className="flex-1">
                            <label htmlFor="email" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Email</label>
                            <input type="tel" id="email" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                        </fieldset>
                        <fieldset className="flex-1">
                            <label htmlFor="password" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Password</label>
                            <input type="tel" id="password" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                        </fieldset>
                        <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[27px]">
                            <button className="px-[34px] text-[18px] bg-primary text-white text-[18px] font-medium font-poppins h-[60px]">
                                Sign Up
                            </button>
                            <button className="flex-1 py-[18px] bg-[#EDEDED] h-[60px] grid place-items-center">
                                <div className="flex items-center gap-[10px]"> 
                                    <GoogleIcon />
                                    <p className="text-[#1E293B] font-poppins font-medium">Sign up with Google</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <p className="text-center lg:text-left text-[#64748B] text-poppins text-[15px]">Already have an account? <Link to='/login' className="text-primary hover:underline">Sign in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}