import Box from "../../common/box";

export default function ShareToCommunity() {

    return (
        <div className="bg-[#f8fafc] py-[108px]">
            <Box>
                <div className="py-[86px] relative px-5 bg-primary text-center text-white">
                    <img src="/images/home/quarter-circle-white-shape.png" alt="Clip circle" className="bottom-0 right-0 absolute pointer-events-none" />
                    <img src="/images/home/quarter-circle-grey-shape.png" alt="Clip circle" className="top-0 left-0 absolute pointer-events-none" />
                    <h2 className="font-semibold font-poppins text-[32px] lg:text-[45px] mb-[54px]">Share to your community, start selling</h2>
                    <button className="bg-[#FBC506] lg:text-[18px] h-[65px] mx-auto w-full max-w-[658px]">
                        Start Selling
                    </button>
                </div>
            </Box>
        </div>
    )
}