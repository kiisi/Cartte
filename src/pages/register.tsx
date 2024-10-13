import { Link } from "react-router-dom";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import { GoogleIcon } from "../components/svgs";
import AuthLayout from "../layout/auth-layout";

export default function Register() {

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <Navbar />
            <AuthLayout>
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
                    <fieldset>
                        <label htmlFor="phone" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Phone</label>
                        <input type="tel" id="phone" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Email</label>
                        <input type="tel" id="email" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                    </fieldset>
                    <fieldset>
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
            </AuthLayout>
            <Footer />
        </div>
    )
}