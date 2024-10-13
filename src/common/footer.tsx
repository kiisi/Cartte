import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "../components/svgs";
import Box from "./box";

export default function Footer() {

    return (
        <footer className="bg-[#f8fafc] mt-auto pt-[42px]">
            <Box>
                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-5 pb-[100px]">
                    <div>
                        <figure className="mb-[37px]">
                            <img src="/cartte-logo.png" alt="Cartte Logo" className="w-[137px] h-[40px]" />
                        </figure>
                        <p className="max-w-[287px] text-[#52525B] font-poppins text-[15px] mb-[47px]">Cartte gives you the blocks and components you need to create a truly professional website.</p>
                        <div className="flex gap-[12px]">
                            <a href="" className="border-[1px] border-[#D4D4D8] rounded-full w-[30px] h-[30px] grid place-items-center">
                                <TwitterIcon />
                            </a>
                            <a href="" className="border-[1px] border-[#D4D4D8] rounded-full w-[30px] h-[30px] grid place-items-center">
                                <FacebookIcon />
                            </a>
                            <a href="" className="border-[1px] border-[#D4D4D8] rounded-full w-[30px] h-[30px] grid place-items-center">
                                <InstagramIcon />
                            </a>
                            <a href="" className="border-[1px] border-[#D4D4D8] rounded-full w-[30px] h-[30px] grid place-items-center">
                                <GithubIcon />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[32px] text-[#52525B]">
                        <h3 className="text-[#FBC506] font-poppins semibold text-[14px]">Company</h3>
                        <p>About</p>
                        <p>Features</p>
                        <p>Works</p>
                        <p>Career</p>
                    </div>
                    <div className="flex flex-col gap-[32px] text-[#52525B]">
                        <h3 className="text-[#FBC506] font-poppins semibold text-[14px]">HELP</h3>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="flex flex-col gap-[32px] text-[#52525B]">
                        <h3 className="text-[#FBC506] font-poppins semibold text-[14px]">RESOURCES</h3>
                        <p>Free eBooks</p>
                        <p>Development Tutorials</p>
                        <p>How to Blog</p>
                        <p>Youtube Playlist</p>
                    </div>
                </div>
                <div className="border-t-[1px] border-t-[#E2E8F0] py-[42px] text-center text-[#71717A]">
                    © Copyright 2022, All Rights Reserved by cartte
                </div>
            </Box>
        </footer>
    )
}