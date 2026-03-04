import React from "react";
import Layout from "./common/Layout";
import ProductImg1 from "../assets/image/Mens/fivee.jpg";
import ProductImg2 from "../assets/image/Mens/two.jpg"; // adjust path
import ProductImg4 from "../assets/image/Mens/four.jpg"; // adjust path
import ProductImg10 from "../assets/image/Mens/ten.jpg"; // adjust path
import ProductImg11 from "../assets/image/Mens/eleven.jpg"; // adjust path
import ProductImg12 from "../assets/image/Mens/twelve.jpg"; // adjust path
import ProductImg7 from "../assets/image/Mens/seven.jpg"; // adjust path

function Shop() {
    return (
        <Layout>
           

            <div className='container'>

                 <nav aria-label='breadcrumb'>
                <ol className='breadcrumb p-4'>
                    <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='breadcrumb-item active'>Shop</li>
                </ol>
            </nav>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card shadow border-0 mb-4'>
                            <div className='card-body p-4'>
                                <h5 className='mb-3'>Categories</h5>
                                <ul className='list-unstyled'>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>Kids</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>Women</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>Men</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='card shadow border-0'>
                            <div className='card-body p-4'>
                                <h5 className='mb-3'>Brands</h5>
                                <ul className='list-unstyled'>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>
                                            Mama Earth
                                        </label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>Puma</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>Killer</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>Levis</label>
                                    </li>
                                    <li className='mb-2'>
                                        <input type='checkbox' />
                                        <label className='ps-2'>
                                            Flying Machine
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-9 pb-5'>
                        <div className='row'>
                            <div className='col-md-3 col-6 mb-4'>
                                <div className='product-card border-0 shadow'>
                                    <img
                                        src={ProductImg1}
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

                            <div className='col-md-3 col-6 mb-4'>
                                <div className='product-card border-0 shadow'>
                                    <img
                                        src={ProductImg2}
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

                            <div className='col-md-3 col-6 mb-4'>
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

                            <div className='col-md-3 col-6 mb-4'>
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

                            <div className='col-md-3 col-6 mb-4'>
                                <div className='product-card border-0 shadow'>
                                    <img
                                        src={ProductImg11}
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

                            <div className='col-md-3 col-6 mb-4'>
                                <div className='product-card border-0 shadow'>
                                    <img
                                        src={ProductImg12}
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
                            <div className='col-md-3 col-6 mb-4'>
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Shop;
