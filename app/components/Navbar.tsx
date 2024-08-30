'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '../components/logo';
import logo from '../components/logo';

const Navbar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const stickyElementRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);


    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleServicesDropdown = () => {
        setShowServicesDropdown(true);
        closeProductsDropdown();
    };

    const closeServicesDropdown = () => {
        setShowServicesDropdown(false);
    }

    const toggleProductsDropdown = () => {
        setShowProductsDropdown(true);
        closeServicesDropdown();
    };

    const closeProductsDropdown = () => {
        setShowProductsDropdown(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="bg-transparent">
                <div ref={stickyElementRef} className={`h-auto w-full top-0 ${scrollY > 20 || showMobileMenu ? `fixed transition ease-in-out duration-700 bg-white` : `absolute`}`}>
                    <div className="mx-auto xs:px-2 px-10 py-2 flex justify-between items-center hover:bg-white transition ease-in-out duration-700">
                        <div className="flex lg:grid items-center justify-items-center bg-transparent ">
                            {/* <img className='w-max h-16 rounded-full hover:text-pink-600 focus:text-pink-600 object-cover cursor-pointer' src="./logo.png" />
                            <a href="/" className="xs:block sm:block md:hidden lg:block xs:ml-2 lg:ml-5 hover:text-pink-600 focus:text-pink-600 font-bold text-xl lg:text-5xl font-logo text-pink-400">
                                Thi Thi Beauty
                            </a> */}
                            {logo()}
                        </div>
                        <div className="hidden md:flex space-x-6 lg:space-x-14">
                            <Link href="/" className="navItem">TRANG CHỦ</Link>
                            <Link href="/about" className="navItem">GIỚI THIỆU</Link>
                            <div className="relative content-center" onMouseEnter={toggleServicesDropdown}> {/* onMouseLeave={toggleFeaturesDropdown} */}
                                <Link href="/Services" className="navItem">DỊCH VỤ</Link>
                                <ul onMouseEnter={toggleServicesDropdown}
                                    onMouseLeave={closeServicesDropdown}
                                    className={`absolute ${showServicesDropdown ? 'block' : 'hidden'} bg-white shadow rounded-md mt-2 w-56`}>
                                    <li><Link href="./Services/meso" className="navChildItem">MESOTHERAPY</Link></li>
                                    <li><Link href="./Services/peel" className="navChildItem">DỊCH VỤ CHUYÊN SÂU (Chemical Peel)</Link></li>
                                    <li><Link href="./Services/dieutrimun" className="navChildItem">CHĂM SÓC MỤN</Link></li>
                                </ul>
                            </div>
                            <div className="relative content-center" onMouseEnter={toggleProductsDropdown} > {/* onMouseLeave={toggleFeaturesDropdown} */}
                                <Link href="/Products" className="navItem">SẢN PHẨM</Link>
                                <ul onMouseEnter={toggleProductsDropdown}
                                    onMouseLeave={closeProductsDropdown}
                                    className={`absolute ${showProductsDropdown ? 'block' : 'hidden'} bg-white shadow rounded-md mt-2 w-48`}>
                                    <li><a href="#" className="navChildItem">KEM DƯỠNG</a></li>
                                    <li><a href="#" className="navChildItem">KEM CHỐNG NẮNG</a></li>
                                    <li><a href="#" className="navChildItem">SỮA RỮA MẶT</a></li>
                                </ul>
                            </div>
                            <Link href="/Blog" className="hidden navItem">CẨM NANG</Link>
                            <Link href="/Library" className="navItem">THƯ VIỆN</Link>
                            <Link href="/Discount" className="navItem">KHUYẾN MÃI</Link>
                            <Link href="/Contact" className="navItem">LIÊN HỆ</Link>
                            <Link href="/WorkingDay" className="group btn bg-pink-200 text-pink-600 hover:text-white border-none hover:bg-pink-600 font-bold text-md lg:text-xl font-about" >
                                ĐẶT LỊCH
                                <svg className="group-hover:text-white w-6 h-6 text-pink-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                                </svg>
                            </Link>
                        </div>


                        <label className="xs:block sm:hidden md:hidden lg:hidden xl:hidden swap swap-rotate bg-transparent border-none hover:border-none hover:bg-transparent text-pink-600">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onClick={toggleMobileMenu} />

                            {/* hamburger icon */}
                            <svg
                                className="swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512">
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>

                            {/* close icon */}
                            <svg
                                className="swap-on fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512">
                                <polygon
                                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                            </svg>
                        </label>
                    </div>
                    <div className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'} bg-gradient-to-b from-pink-50 to-pink-300 shadow-md`}>
                        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
                            <a href="#" className="mbNavItem">TRANG CHỦ</a>
                            <a href="#" className="mbNavItem">GIỚI THIỆU</a>
                            <a href="#" className="mbNavItem">DỊCH VỤ</a>
                            <a href="#" className="mbNavItem">SẢN PHẨM</a>
                            <a href="#" className="mbNavItem">THƯ VIỆN</a>
                            <a href="#" className="mbNavItem">KHUYẾN MÃI</a>
                            <a href="#" className="mbNavItem">LIÊN LẠC</a>
                            <Link href="/Workingday" className="group btn bg-pink-200 text-pink-600 hover:text-white border-none hover:bg-pink-600 font-bold text-lg lg:text-xl"
                            >
                                ĐẶT LỊCH
                                <svg className="group-hover:text-white w-6 h-6 text-pink-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;