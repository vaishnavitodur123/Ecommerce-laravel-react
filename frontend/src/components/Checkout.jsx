import React from "react";
import Layout from "./common/Layout";
import ProductImg from "../assets/image/Mens/fivee.jpg";

function Checkout() {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb p-4'>
                                <li className='breadcrumb-item'>
                                    <a href='/'>Home</a>
                                </li>
                                <li
                                    className='breadcrumb-item active'
                                    aria-current='page'
                                >
                                    Checkout
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className='row pb-5'>
                    {/* Left Column: Billing Details */}
                    <div className='col-md-8'>
                        <h3 className='pb-3'>Billing Details</h3>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Name'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Email'
                                />
                            </div>
                            <div className='col-md-12 mb-3'>
                                <textarea
                                    className='form-control'
                                    rows='4'
                                    placeholder='Address'
                                ></textarea>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='City'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='State'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Zip'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Phone'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Items */}
                    <div className='col-md-4'>
                        <h3 className='pb-3'>Items</h3>

                        <div className='d-flex align-items-center mb-3'>
                            <img
                                src={ProductImg}
                                alt='Product'
                                width='60'
                                className='img-fluid rounded'
                            />
                            <div className='ms-3'>
                                <h6 className='mb-0'>
                                    Yellow & White Dress Combination for Kids
                                </h6>
                                <div className='mt-2 fw-bold'>$10</div>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between mb-2'>
                            <span>Subtotal</span>
                            <span>$10</span>
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <span>Shipping</span>
                            <span>$3</span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between fw-bold mb-4'>
                            <span>Grand Total</span>
                            <span>$13</span>
                        </div>

                        <h5 className='pb-2 pt-2'>Payment Methods</h5>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='paymentMethod'
                                    id='stripe'
                                    value='stripe'
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='stripe'
                                >
                                    Stripe
                                </label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='paymentMethod'
                                    id='cod'
                                    value='cod'
                                    defaultChecked
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='cod'
                                >
                                    COD
                                </label>
                            </div>
                        </div>

                        <button
                            className='btn btn-dark mt-2'
                            style={{ backgroundColor: "#002538" }}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Checkout;
