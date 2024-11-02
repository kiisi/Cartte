import { Link } from "react-router-dom";
import Box from "../common/box";
import BestSellingItems from "../components/home/best-selling-items";
import Market from "../components/home/market";
import { MenuIcon, SearchIcon } from "../components/svgs";

export default function Explore() {

    return (
        <>
            <nav className="bg-white sticky top-0 z-50">
                <Box>
                    <div className="h-[87px] flex justify-between items-center lg:gap-[35px]">
                        <Link to='/'>
                            <img src="/cartte-logo.png" alt="Cartte Logo" className="w-[137px] shrink-0 h-[40px]" />
                        </Link>
                        <div className="h-[54px] bg-[#FFFCF0] flex-1 px-[17px] py-[13px] flex items-center gap-[11px]">
                            <SearchIcon />
                            <input className="flex-1 bg-transparent placeholder-[#7E7D7D]" placeholder="Enter store name or item" />
                        </div>
                        <div className="hidden lg:flex gap-[21px]">
                            <Link to='/register' className="px-[20px] py-[15px] text-[18px] border-[1px] bg-primary text-white text-[18px] font-semibold">
                                Dashboard
                            </Link>
                        </div>
                        <button className="grid lg:hidden place-items-center h-[45px] w-[45px] border-[1px] border-primary">
                            <MenuIcon />
                        </button>
                    </div>
                </Box>
            </nav>
            <BestSellingItems />
            <Market />
        </>
    )
}