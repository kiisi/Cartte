import { ArrowUpAltIcon, InfoIcon } from "../components/svgs";

const dashboardData = [
    {
        title: 'Balance',
        amount: 27000,
        percentage: 36,
        isProfit: true,
    },
    {
        title: 'Last 7 days',
        amount: 27000,
        percentage: 14,
        isProfit: false,
    },
    {
        title: 'Last 7 days',
        amount: 126000,
        percentage: 36,
        isProfit: true,
    },
    {
        title: 'Total earnings',
        amount: 400000,
        percentage: 36,
        isProfit: true,
    },
]

export default function Dashboard() {

    return (
        <div className="py-[34px] font-galano-grotesque">
            <header className="mb-[50px]">
                <h1 className="text-[#181818] font-semibold text-[29px]">Welcome to Cartte</h1>
            </header>
            <div className="mb-[50px] bg-[#FFFAE9] w-full pt-[46px] pb-[30px] w-full grid place-items-center text-center">
                <img src="/images/dashboard/product-hunt.png" alt="Create your first product" />
                <p className="mb-[25px] lg:text-[24px] text-[#181818] font-medium">We're here to help you get paid for your work.</p>
                <button className="bg-[#FBC506] py-[15px] px-[20px]">Create your first product</button>
            </div>
            <div className="grid grid-cols-4 gap-[18px]">
                {
                    dashboardData.map((data, index) => (
                        <div key={index} className="bg-[#FFFAE9] px-[34px] py-[19px]">
                            <h2 className="mb-[12px] font-medium text-[#625757] flex items-center gap-[5px]">
                                {data.title}
                                <InfoIcon />
                            </h2>
                            <div className="flex justify-between">
                                <h1 className="font-semibold leading-[29px] text-[29px] flex justify-between tracking-tighter">₦ {data.amount.toLocaleString()}</h1>

                                {
                                    data.isProfit ? (
                                        <p className="whitesapce-nowrap flex-nowrap self-end text-[#22C55E] text-[14px] font-medium flex items-center gap-[2px]">
                                            +{data.percentage}%
                                            <ArrowUpAltIcon />
                                        </p>
                                    ) : (
                                        <p className="whitesapce-nowrap flex-nowrap self-end text-[#EF4444] text-[14px] font-medium flex items-center gap-[2px]">
                                            -{data.percentage}%
                                            <ArrowUpAltIcon className="stroke-[#EF4444]" />
                                        </p>
                                    )
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}