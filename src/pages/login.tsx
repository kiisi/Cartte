import { Link } from "react-router-dom";
import { GoogleIcon } from "../components/svgs";
import AuthLayout from "../layout/auth-layout";

export default function Login() {

    return (
        <AuthLayout>
            <header className="mb-[48px]">
                <h1 className="text-[#090914] font-semibold text-[42px] lg:text-[56px] mb-[12px] lg:mb-[16px]">Welcome back</h1>
                <p className="lg:text-[19px] lg:leading-[32px] font-poppins text-[#52525B]">Join over 188,061 creators who have earned over $1,014,349,379 on Gumroad selling digital products and memberships.</p>
            </header>
            <form className="flex flex-col gap-[29px]">
                <fieldset>
                    <label htmlFor="email" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Email</label>
                    <input type="email" id="email" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Password</label>
                    <input type="password" id="password" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                </fieldset>
                <fieldset className="mb-[10px] flex justify-between text-[15px] font-poppins">
                    <div className="flex items-center">
                        <div className="inline-block mr-2 h-[20px] w-[20px] border-[1px] border-[#94A3B8] rounded-[4px]">
                        </div>
                        <span className="text-[#18181B]">Remember me</span>
                    </div>
                    <Link to='/forgot-password' className="text-primary hover:underline">Forgot password?</Link>
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
                    <p className="text-center lg:text-left text-[#64748B] text-poppins text-[15px]">Don't have an account? <Link to='/register' className="text-primary hover:underline">Create free account</Link></p>
                </div>
            </form>
        </AuthLayout>
    )
}