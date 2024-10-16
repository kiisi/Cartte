import { useNavigate } from "react-router-dom";
import AuthLayout from "../layout/auth-layout";

export default function ForgotPassword() {
    
    const navigate = useNavigate()

    return (
        <AuthLayout>
            <header className="mb-[58px] lg:mb-[100px]">
                <h1 className="text-[#090914] font-semibold text-[42px] lg:text-[56px] mb-[12px] lg:mb-[16px]">Forgot Password</h1>
                <p className="lg:text-[19px] lg:leading-[32px] font-poppins text-[#52525B]">Please enter email to send reset instructions to</p>
            </header>
            <form className="w-full max-w-[568px]">
                <fieldset className="mb-[34px]">
                    <label htmlFor="email" className="inline-block mb-[11px] text-[#090914] text-[17px] font-medium leading-[25px]">Email address</label>
                    <input type="email" id="email" className="px-4 w-full block border-[1px] border-[#CBD5E1] bg-[#F8FAFC] h-[55px] lg:h-[65px]" />
                </fieldset>
                <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[27px]">
                    <button onClick={() => navigate('/confirm-email?email=email@gmail.com')} className="px-[64px] text-[17px] bg-primary text-white text-[18px] font-medium font-poppins h-[60px]">
                        Send
                    </button>
                    <button className="flex-1 py-[17px] bg-[#EDEDED] h-[60px] text-primary font-semibold">
                        Cancel
                    </button>
                </div>
            </form>
        </AuthLayout>
    )
}