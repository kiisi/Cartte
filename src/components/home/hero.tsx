import { SearchIcon } from "../svgs";

export default function Hero() {

    return (
        <div className="bg-[url('/images/home/students-working-together-project.png')] pt-[175px] lg:pt-[229px] pb-[208px] px-[20px]">
            <div className="w-full max-w-[751px] mx-auto flex flex-col items-center text-center">
                <h1 className="text-white text-[36px] lg:text-[55px] lg:leading-[55px] lg:leading-[65px] font-semibold mb-2">The best way to sell
                    your digital products online</h1>
                <p className="text-white lg:text-[21px] lg:leading-[28px] font-light mb-[40px]">You know all those great ideas you have? We want you to try them, lots of them, and find out what works.</p>
                <div className="w-full max-w-[658px] mx-auto">
                    <div className="w-full h-[65px] bg-white px-[27px] flex gap-[17px] items-center">
                        <SearchIcon />
                        <input
                            placeholder="Enter store name or item"
                            className="flex-1 outline-none"
                        />
                    </div>
                    <button className="h-[65px] w-full bg-primary text-white font-medium text-[18px]">
                        SEARCH NOW
                    </button>
                </div>
            </div>
        </div>
    )
}