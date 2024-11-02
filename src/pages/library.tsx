import LibraryProducts from "../components/library";

export default function Library() {

    return (
        <div className="py-[34px] font-galano-grotesque">
            <header className="mb-[50px]">
                <h1 className="text-[#181818] font-semibold text-[29px]">Library</h1>
            </header>
            <div className="flex gap-[20px] mb-[50px]">
                <div className="bg-[#FBC506] py-[12px] px-[20px] text-white lg:text-[18px] font-medium">
                    Purchases
                </div>
                <div className="py-[12px] px-[20px] text-[#151517] lg:text-[18px] font-medium">
                    Liked
                </div>
                <div className="py-[12px] px-[20px] text-[#151517] lg:text-[18px] font-medium">
                    Reviews
                </div>
            </div>
            <LibraryProducts />
        </div>
    )
}