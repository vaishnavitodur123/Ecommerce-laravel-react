import React from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='shadow'>
            {/* TOP BAR */}
            <div className='bg-dark text-center py-2'>
                <span className='text-white'>Your Fashion partner</span>
            </div>

            {/* NAVBAR */}
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container'>
                    {/* LOGO */}
                    <Link
                        className='navbar-brand d-flex align-items-center'
                        to='/'
                    >
                        <img src={logo} alt='Pure Wear' className='logo-img' />
                    </Link>

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

                                <a href='#' className='nav-link icon-link ms-1'>
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
    );
};

export default Header;
