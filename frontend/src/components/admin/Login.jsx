import React, { useLayoutEffect } from "react";
import Layout from "../common/Layout";

const Login = () => {
    return (
        <Layout>
            <div className='container mt-5 pb-4'>
                <div className='row justify-content-center '>
                    <div className='col-md-6'>
                        <div className='card shadow-sm'>
                            <div className='card-header text-center'>
                                <h4>Admin Login</h4>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='email'
                                            placeholder='Enter email'
                                            name='email'
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='password'
                                            className='form-label'
                                        >
                                            Password
                                        </label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            id='password'
                                            placeholder='Enter password'
                                            name='password'
                                            required
                                        />
                                    </div>
                                    <div className='d-grid mt-4'>
                                        <button
                                            type='submit'
                                            className='btn btn-secondary'
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
