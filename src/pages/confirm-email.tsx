import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/auth-layout";

export default function ConfirmEmail() {

    const navigate = useNavigate()

    return (
        <AuthLayout>
            <header className="mb-[58px] lg:mb-[100px]">
                <h1 className="text-[#090914] font-semibold text-[42px] lg:text-[56px] mb-[12px] lg:mb-[16px]">Confirm your email</h1>
                <p className="lg:text-[19px] lg:leading-[32px] font-poppins text-[#52525B]">To protect your account, we have sent an Authentication Token to email@email.com Please enter it here to continue.</p>
            </header>
            <form className="w-full max-w-[568px]">
                <fieldset className="mb-[34px]">
                    <label htmlFor="email" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Email address</label>
                    <input type="email" id="email" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                </fieldset>
                <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[27px]">
                    <button onClick={() => navigate('/login')} className="px-[64px] text-[17px] bg-primary text-white text-[18px] font-medium font-poppins h-[60px]">
                        Sign In
                    </button>
                    <button className="flex-1 py-[17px] bg-[#EDEDED] h-[60px] text-primary font-semibold">
                        Resend Authentication Token
                    </button>
                </div>
                <div className="pt-[21px]">
                    <p className="text-center lg:text-left text-[#64748B] text-poppins text-[15px]">Having trouble logging in?  <Link to='/contact-us' className="text-primary hover:underline">Contact Us</Link></p>
                </div>
            </form>
        </AuthLayout>
    )
}