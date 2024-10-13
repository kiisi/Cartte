import Footer from "../common/footer";
import Navbar from "../common/navbar";
import ShareToCommunity from "../components/banner/share-to-community";
import BestSellingItems from "../components/home/best-selling-items";
import Hero from "../components/home/hero";
import Market from "../components/home/market";

export default function Home(){

    return (
        <>
            <Navbar />
            <Hero />
            <BestSellingItems />
            <Market />
            <ShareToCommunity />
            <Footer />
        </>
    )
}