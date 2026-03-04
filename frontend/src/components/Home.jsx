import LatestProducts from "./common/LatestProducts";
import "swiper/css";
import "swiper/css/navigation";
import FeaturedProduct from "./common/FeaturedProduct";
import Hero from "./common/Hero";
import Layout from "./common/Layout";

function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <LatestProducts />
                <FeaturedProduct />
            </Layout>
        </>
    );
}

export default Home;
