import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AnalyticsIcon, AppIcon, CheckoutIcon, CollaboratorsIcon, CustomersIcon, EmojiIcon, LibraryIcon, LogoutIcon, SalesIcon, SearchAltIcon, SettingsIcon, WalletIcon } from "../components/svgs";

interface DashboardLayoutProps {
    className?: string;
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    return (
        <div className="flex h-screen">
            <nav className="flex flex-col w-[302px] overflow-y-auto h-full py-[24px] bg-primary px-[20px] md:px-[30px] lg:px-[50px] font-galano-grotesque">
                <header className="mb-[65px]">
                    <Link to='/dashboard'>
                        <img src="/cartte-logo-white.png" alt="Cartte Logo White" className="w-[137px] h-[40px]" />
                    </Link>
                </header>
                <div className="flex flex-col gap-[40px]">
                    <div className="flex items-center gap-[14px]">
                        <AppIcon />
                        <div className="text-white text-[18px] font-medium">Home</div>
                    </div>
                    <div>
                        <h3 className="text-[#A1A1AA] text-[14px] uppercase mb-[30px]">Personal</h3>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <SearchAltIcon />
                            <div className="text-white text-[18px] font-medium">Explore</div>
                        </div>
                        <div className="flex items-center gap-[14px]">
                            <LibraryIcon />
                            <div className="text-white text-[18px] font-medium">Library</div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#A1A1AA] text-[14px] uppercase mb-[30px]">Shop</h3>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <EmojiIcon />
                            <div className="text-white text-[18px] font-medium">Products</div>
                        </div>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <CustomersIcon />
                            <div className="text-white text-[18px] font-medium">Customers</div>
                        </div>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <CollaboratorsIcon />
                            <div className="text-white text-[18px] font-medium">Collaborators</div>
                        </div>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <SalesIcon />
                            <div className="text-white text-[18px] font-medium">Sales</div>
                        </div>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <CheckoutIcon />
                            <div className="text-white text-[18px] font-medium">Checkout</div>
                        </div>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <AnalyticsIcon />
                            <div className="text-white text-[18px] font-medium">Analytics</div>
                        </div>
                        <div className="flex items-center gap-[14px] mb-[30px]">
                            <WalletIcon />
                            <div className="text-white text-[18px] font-medium">Wallet</div>
                        </div>
                    </div>
                </div>
                <div className="mt-auto py-[50px] lg:py-[100px]">
                    <div className="flex items-center gap-[14px] mb-[30px]">
                        <SettingsIcon />
                        <div className="text-white text-[18px] font-medium">Settings</div>
                    </div>
                    <div className="flex items-center gap-[14px]">
                        <LogoutIcon />
                        <div className="text-white text-[18px] font-medium">Logout</div>
                    </div>
                </div>
            </nav>
            <div className="h-full flex-1 overflow-y-auto px-[20px] md:px-[30px] lg:px-[50px]">
                {children}
            </div>
        </div>
    )
}