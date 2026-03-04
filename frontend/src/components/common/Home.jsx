import logo from "../../assets/image/logo.png";
import Banner1 from "../../assets/image/banner-1.jpg";
import Banner2 from "../../assets/image/banner-2.jpg";
import LatestProducts from "./LatestProducts";
import logo1 from "../../assets/image/logo-white.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import FeaturedProduct from "./FeaturedProduct";

function Home() {
    return (
        <>
            <header className='shadow'>
                {/* TOP BAR */}
                <div className='bg-dark text-center py-2'>
                    <span className='text-white'>Your Fashion partner</span>
                </div>

                {/* NAVBAR */}
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                    <div className='container'>
                        {/* LOGO */}
                        <a
                            className='navbar-brand d-flex align-items-center'
                            href='#'
                        >
                            <img
                                src={logo}
                                alt='Pure Wear'
                                className='logo-img'
                            />
                        </a>

                        {/* RIGHT SIDE (ONE FLEX GROUP) */}
                        <div className='collapse navbar-collapse'>
                            <div className='ms-auto d-flex align-items-center'>
                                {/* LINKS */}
                                <ul className='navbar-nav align-items-center'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Kids
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Womens
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Mens
                                        </a>
                                    </li>
                                </ul>

                                {/* ICONS */}
                                <div className='nav-icons d-flex align-items-center ms-1'>
                                    <a href='#' className='nav-link icon-link'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='28'
                                            height='28'
                                            fill='currentColor'
                                            class='bi bi-person'
                                            viewBox='0 0 16 16'
                                        >
                                            <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z'></path>
                                        </svg>
                                    </a>

                                    <a
                                        href='#'
                                        className='nav-link icon-link ms-1'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='28'
                                            fill='currentColor'
                                            class='bi bi-bag'
                                            viewBox='0 0 16 16'
                                        >
                                            <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z'></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <section className='section-1'>
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <img
                            className='content'
                            src={Banner1}
                            alt='Fashion Banner 1'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='content'
                            src={Banner2}
                            alt='Fashion Banner 2'
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
            <LatestProducts />
            <FeaturedProduct />

            <footer>
                <div className='py-5 text-white'>
                    <div className='container'>
                        <div className='row mb-5'>
                            <div className='col-md-3'>
                                <img src={logo1} width={150} />
                                <div className='pt-3 pe-4'>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <h3 className='mb-3'>Categories</h3>
                                <ul>
                                    <li>
                                        <a href='http://'>Kids</a>
                                    </li>
                                    <li>
                                        <a href='http://'>Women</a>
                                    </li>
                                    <li>
                                        <a href='http://'>Men</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                <h3 className='mb-3'>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href='http://'>Login</a>
                                    </li>
                                    <li>
                                        <a href='http://'>Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                <h3 className='mb-3'>Get in Touch</h3>
                                <ul>
                                    <li>+91-95XXXXXXX</li>
                                    <li>info@example.com</li>
                                </ul>
                            </div>
                        </div>

                        <div className='row spotlight py-5'>
                            <div className='col-md-4'>
                                <div className='d-flex justify-content-center gap-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        fill='currentColor'
                                        className='bi bi-truck'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2'></path>
                                    </svg>
                                    <h4 className='mb-0'>Free Delivery</h4>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='d-flex justify-content-center gap-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        fill='currentColor'
                                        className='bi bi-cash'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4'></path>
                                        <path d='M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z'></path>
                                    </svg>
                                    <h4 className='mb-0'>
                                        Money Back Guarntee
                                    </h4>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='d-flex justify-content-center gap-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        fill='currentColor'
                                        className='bi bi-credit-card-2-back'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z'></path>
                                        <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1'></path>
                                    </svg>
                                    <h4 className="mb-0">Secure Payment</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
