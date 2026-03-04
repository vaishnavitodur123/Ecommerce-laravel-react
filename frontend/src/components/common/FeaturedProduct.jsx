import React from "react";
import ProductImg5 from "../../assets/image/Mens/five.jpg";
import ProductImg10 from "../../assets/image/Mens/ten.jpg";
import ProductImg7 from "../../assets/image/Mens/seven.jpg";
import ProductImg4 from "../../assets/image/Mens/four.jpg";

const FeaturedProduct = () => {
    return (
        <section className='section-2 py-5'>
            <div className='container'>
                <h2>Featured Products</h2>

                <div className='row mt-4 gy-4'>
                    {/* Product 1 */}
                    <div className='col-md-3'>
                        <div className='product-card border-0 shadow'>
                            <img
                                src={ProductImg5}
                                alt='Product'
                                className='img-fluid'
                            />
                        </div>
                        <div className='card-body mt-2'>
                            <a
                                href='#'
                                className='text-black text-decoration-none'
                            >
                                Red Check Shirt for Men
                            </a>
                            <div className='cost mt-1'>
                                $49
                                <span className='text-decoration-line-through text-secondary ms-2'>
                                    $89
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className='col-md-3'>
                        <div className='product-card border-0 shadow'>
                            <img
                                src={ProductImg10}
                                alt='Product'
                                className='img-fluid'
                            />
                        </div>
                        <div className='card-body mt-2'>
                            <a
                                href='#'
                                className='text-black text-decoration-none'
                            >
                                Red Check Shirt for Men
                            </a>
                            <div className='cost mt-1'>
                                $49
                                <span className='text-decoration-line-through text-secondary ms-2'>
                                    $89
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className='col-md-3'>
                        <div className='product-card border-0 shadow'>
                            <img
                                src={ProductImg7}
                                alt='Product'
                                className='img-fluid'
                            />
                        </div>
                        <div className='card-body mt-2'>
                            <a
                                href='#'
                                className='text-black text-decoration-none'
                            >
                                Red Check Shirt for Men
                            </a>
                            <div className='cost mt-1'>
                                $49
                                <span className='text-decoration-line-through text-secondary ms-2'>
                                    $89
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className='col-md-3'>
                        <div className='product-card border-0 shadow'>
                            <img
                                src={ProductImg4}
                                alt='Product'
                                className='img-fluid'
                            />
                        </div>
                        <div className='card-body mt-2'>
                            <a
                                href='#'
                                className='text-black text-decoration-none'
                            >
                                Red Check Shirt for Men
                            </a>
                            <div className='cost mt-1'>
                                $49
                                <span className='text-decoration-line-through text-secondary ms-2'>
                                    $89
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
