import { AnchorIcon, CartIcon } from "../svgs";

export default function LibraryProducts() {

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-[40px]">
                <div className="w-full max-w-[307px]">
                    <div className="mb-[13px]">
                        <h2 className="text-[#252C32] mb-[8px] font-semibold">Search Product</h2>
                        <div className="flex gap-[13px]">
                            <input
                                className="outline-primary px-[13px] h-[47px] w-full border-[1.13px] border-[#DDE2E4]"
                                placeholder="Search product"
                            />
                        </div>
                    </div>
                    <div className="mb-[13px]">
                        <h2 className="text-[#252C32] mb-[8px] font-semibold">Tag</h2>
                        <div className="flex flex-col gap-[9.5px]">
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[18px] h-[18px] border-[1.13px] border-[#B0BABF] bg-[#F6F8F9]"></div>
                                <p className="text-[#252C32] text-[18px]">All</p>
                            </div>
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[18px] h-[18px] border-[1.13px] border-[#B0BABF] bg-[#F6F8F9]"></div>
                                <p className="text-[#252C32] text-[18px]">eBooks</p>
                            </div>
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[18px] h-[18px] border-[1.13px] border-[#B0BABF] bg-[#F6F8F9]"></div>
                                <p className="text-[#252C32] text-[18px]">Digital Products</p>
                            </div>
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[18px] h-[18px] border-[1.13px] border-[#B0BABF] bg-[#F6F8F9]"></div>
                                <p className="text-[#252C32] text-[18px]">Member</p>
                            </div>
                            <div className="flex gap-[8px] items-center">
                                <div className="w-[18px] h-[18px] border-[1.13px] border-[#B0BABF] bg-[#F6F8F9]"></div>
                                <p className="text-[#252C32] text-[18px]">Coffee</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[18px] gap-y-[48px]">
                    {
                        [...Array(6)].map((_, index) => (
                            <div key={index}>
                                <figure>
                                    <img
                                        src="/images/home/carousel-img.png"
                                        alt="Carousel"
                                        className="h-[265px] w-full object-cover"
                                    />
                                </figure>
                                <div className="bg-[#FFFAE9] py-[22px] px-[18px]">
                                    <p className="text-[#9D9DAB] font-semibold mb-[13px]">Cooking</p>
                                    <h1 className="mb-[8px] text-[#151517] underline text-[18px] font-semibold">Sushi  Recipe Book</h1>
                                    <div className="flex gap-2 items-center mb-[8px]">
                                        <img src="/images/home/cartte-logo-x.png" alt="Cartte logo" />
                                        <p className="text-[#373738] underline">Chef Chi</p>
                                    </div>
                                    <div className="flex mb-[11px]">
                                        {
                                            [...Array(5)].map((_, index) => (
                                                <img key={index} src="/images/home/star.png" alt="Star" width={16} height={20} />
                                            ))
                                        }
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[#151517]">N12,000</p>
                                        <div className="flex items-center gap-[22px]">
                                            <CartIcon />
                                            <AnchorIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}