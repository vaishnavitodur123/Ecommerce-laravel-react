import LatestProducts from "./LatestProducts";
import "swiper/css";
import "swiper/css/navigation";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import Layout from "./Layout";

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
