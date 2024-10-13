import { Link } from "react-router-dom"
import { MenuIcon } from "../components/svgs"
import Box from "./box"

export default function Navbar() {

    return (
        <nav className="bg-white sticky top-0 z-50">
            <Box>
                <div className="h-[87px] flex justify-between items-center">
                    <Link to='/'>
                        <img src="/cartte-logo.png" alt="Cartte Logo" className="w-[137px] h-[40px]" />
                    </Link>
                    <div className="hidden lg:flex gap-[50px] items-center text-[20px] font-medium">
                        <p>How it works</p>
                        <p>Features</p>
                        <p>FAQs</p>
                        <p>Blog</p>
                    </div>
                    <div className="hidden lg:flex gap-[21px]">
                        <Link to='/login' className="px-[20px] py-[15px] text-[18px] border-[1px] border-primary text-primary text-[18px] font-semibold">
                            Login
                        </Link>
                        <Link to='/register' className="px-[20px] py-[15px] text-[18px] border-[1px] bg-primary text-white text-[18px] font-semibold">
                            Start Selling
                        </Link>
                    </div>
                    <button className="grid lg:hidden place-items-center h-[45px] w-[45px] border-[1px] border-primary">
                        <MenuIcon />
                    </button>
                </div>
            </Box>
        </nav>
    )
}