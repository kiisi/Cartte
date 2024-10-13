import Box from "../../common/box";
import { AnchorIcon, CartIcon } from "../svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function BestSellingItems() {

    return (
        <Box className="pt-[105px] pb-[88px]">
            <header className="mb-[54px]">
                <h1 className="text-[26px] text-[#151517] font-semibold">Best Selling Items</h1>
            </header>
            <div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.25}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        900: {
                            slidesPerView: 2.25,
                        },
                        1024: {
                            slidesPerView: 3.25,
                        },
                        1240: {
                            slidesPerView: 4,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        [...Array(5)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div>
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
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </Box>
    )
}