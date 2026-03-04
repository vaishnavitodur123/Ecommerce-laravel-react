import LatestProducts from "./LatestProducts";
import "swiper/css";
import "swiper/css/navigation";
import FeaturedProduct from "./FeaturedProduct";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <LatestProducts />
            <FeaturedProduct />
            <Footer />
        </>
    );
}

export default Home;
